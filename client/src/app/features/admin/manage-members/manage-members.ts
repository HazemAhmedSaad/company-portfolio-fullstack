import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import IMember from '../../../core/models/member.model';
import { MemberService } from '../../../core/services/members/member-service';


@Component({
  selector: 'app-manage-members',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-members.html',
  styleUrl: './manage-members.css',
})
export class ManageMembers implements OnInit {
  private memberService = inject(MemberService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  members: IMember[] = [];
  memberForm!: FormGroup;

  isModalOpen = false;
  isEditMode = false;
  submitted = false;
  selectedFile: File | null = null;
  currentMemberId: string | null = null;

  ngOnInit() {
    this.initForm();
    this.loadMembers();
    this.cdr.detectChanges();
  }

  initForm() {
    this.memberForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      jobTitle: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      image: [null]
    });
  }

  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: (res: any) => {
        this.members = res.data || res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading members', err)
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  openModal(member?: IMember) {
    this.submitted = false;
    this.isEditMode = !!member;
    this.currentMemberId = member ? member._id : null;
    this.selectedFile = null;

    if (member) {
      this.memberForm.patchValue({
        name: member.name,
        jobTitle: member.jobTitle,
        description: member.description,
        position: member.position.join(', '),
        email: member.email
      });
    } else {
      this.memberForm.reset();
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.memberForm.reset();
  }

  isInvalid(controlName: string) {
    const control = this.memberForm.get(controlName);
    return control?.invalid && (control.touched || this.submitted);
  }

  submitMember() {
    this.submitted = true;

    if (this.memberForm.invalid) return;

    const formData = new FormData();
    formData.append('name', this.memberForm.value.name);
    formData.append('jobTitle', this.memberForm.value.jobTitle);
    formData.append('description', this.memberForm.value.description);
    formData.append('email', this.memberForm.value.email);

    const positions = this.memberForm.value.position.split(',').map((p: string) => p.trim());
    positions.forEach((p: string) => formData.append('position', p));

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    if (this.isEditMode && this.currentMemberId) {
      this.memberService.updateMember(this.currentMemberId, formData).subscribe({
        next: () => {
          this.loadMembers();
          this.closeModal();
          this.cdr.detectChanges();
        },
        error: (err) => alert(err.error?.message || 'Update failed')
      });
    } else {
      this.memberService.addMember(formData).subscribe({
        next: (res: any) => {
          this.members = [res.data, ...this.members];
          this.closeModal();
        },
        error: (err) => console.error(err)
      });
    }
  }

  deleteMember(id: string) {
    this.memberService.deleteMember(id).subscribe({
      next: () => {
        this.members = this.members.filter(m => m._id !== id)
        this.cdr.detectChanges();
      }

      ,
      error: (err) => alert(err.error?.message || 'Delete failed')
    });
  }
}
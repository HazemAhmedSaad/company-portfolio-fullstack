import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../../core/services/projects/project-service';
import { IProject } from '../../../core/models/project.model';


@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './manage-projects.html',
  styleUrl: './manage-projects.css',
})
export class ManageProjects implements OnInit {
  private fb = inject(FormBuilder);
  private projectService = inject(ProjectService);
  private cdr = inject(ChangeDetectorRef);

  projects: IProject[] = [];
  projectForm!: FormGroup;
  isModalOpen = false;
  isEditMode = false;
  selectedFile: File | null = null;
  currentProjectId: string | null = null;

  ngOnInit() {
    this.loadProjects();
    console.log(this.loadProjects());

    this.initForm();
  }

  initForm() {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      clientName: ['', [Validators.required]],
      link: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      status: ['Completed', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      image: [null]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.projectForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (data: any) => (this.projects = data.data
        , this.cdr.detectChanges()
      )
      ,
      error: (err) => console.error('Error loading projects', err)
    });
  }

  openModal(project?: IProject) {
    this.isModalOpen = true;
    if (project) {
      this.isEditMode = true;
      this.currentProjectId = project._id;
      this.projectForm.patchValue({
        title: project.title,
        clientName: project.clientName,
        link: project.link,
        technologies: project.technologies.join(', '),
        status: project.status,
        description: project.description
      });
    } else {
      this.isEditMode = false;
      this.currentProjectId = null;
      this.projectForm.reset({ status: 'Completed' });
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.projectForm.reset();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submitProject() {
    const formValues = this.projectForm.value;
    const formData = new FormData();

    formData.append('title', formValues.title);
    formData.append('clientName', formValues.clientName);
    formData.append('link', formValues.link);
    formData.append('description', formValues.description);
    formData.append('status', formValues.status);

    const techArray = formValues.technologies.split(',').map((t: string) => t.trim());
    techArray.forEach((tech: string) => formData.append('technologies', tech));

    if (this.selectedFile) {
      formData.append('images', this.selectedFile);
    }

    if (this.isEditMode && this.currentProjectId) {
      this.projectService.updateProject(this.currentProjectId, formData).subscribe({
        next: (res: any) => {
          const index = this.projects.findIndex(p => p._id === this.currentProjectId);
          if (index !== -1) {
            this.projects[index] = res.data;
            this.projects = [...this.projects];
          }
          this.closeModal();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.projectService.addProject(formData).subscribe({
        next: (res: any) => {
          this.projects = [res.data, ...this.projects];
          this.closeModal();
        },
        error: (err) => console.error(err)
      });
    }
  }
  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe({
      next: () => {
        this.projects = this.projects.filter(p => p._id !== id);
        this.cdr.detectChanges();
      }
      ,
      error: (err) => console.error(err)
    },)
  }


  getStatusClass(status: string) {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs';
      case 'In Progress': return 'bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs';
      case 'Review': return 'bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs';
      default: return 'bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs';
    }
  }
}
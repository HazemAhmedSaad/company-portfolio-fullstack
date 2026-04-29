import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import IService from '../../../core/models/service.model';
import { ServiceOfferService } from '../../../core/services/servicesOffers/service-offer-service';

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './manage-services.html',
  styleUrl: './manage-services.css',
})
export class ManageServices implements OnInit {
  private serviceOfferService = inject(ServiceOfferService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  services: IService[] = [];
  serviceForm!: FormGroup;
  isAddModalOpen = false;
  isEditModalOpen = false;
  submitted = false; // Flag للتحقق من الضغط على زر الإرسال
  selectedFile: File | null = null;
  currentServiceId: string | null = null;

  ngOnInit() {
    this.initForm();
    this.loadServices();
    this.cdr.detectChanges();
  }

  initForm() {
    this.serviceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      offers: ['', [Validators.required]],
      imageIcon: [null]
    });
  }

  loadServices() {
    this.serviceOfferService.getServices().subscribe({
      next: (res: any) => {
        this.services = res.data || res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading services:', err)
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  openAddModal() {
    this.submitted = false;
    this.currentServiceId = null;
    this.selectedFile = null;
    this.serviceForm.reset();
    this.isEditModalOpen = false;
    this.isAddModalOpen = true;
  }

  openEditModal(service: IService) {
    this.submitted = false;
    this.isAddModalOpen = false;
    this.isEditModalOpen = true;
    this.currentServiceId = service._id;
    this.selectedFile = null;

    this.serviceForm.patchValue({
      title: service.title,
      description: service.description,
      offers: service.offers ? service.offers.join(', ') : ''
    });
  }

  closeModals() {
    this.isAddModalOpen = false;
    this.isEditModalOpen = false;
    this.submitted = false;
  }

  // ميثود مساعدة لفحص حالة الحقل
  isInvalid(controlName: string): boolean {
    const control = this.serviceForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitted));
  }

  submitService() {
    this.submitted = true;

    // منع الإرسال إذا كانت البيانات ناقصة أو الصورة غير موجودة في حالة الإضافة
    if (this.serviceForm.invalid || (!this.isEditModalOpen && !this.selectedFile)) {
      return;
    }

    const formData = new FormData();
    formData.append('title', this.serviceForm.value.title);
    formData.append('description', this.serviceForm.value.description);

    if (this.selectedFile) {
      formData.append('imageIcon', this.selectedFile);
    }

    const offersArray = this.serviceForm.value.offers
      ? this.serviceForm.value.offers.split(',').map((t: string) => t.trim())
      : [];

    offersArray.forEach((offer: string) => formData.append('offers', offer));

    if (this.isEditModalOpen && this.currentServiceId) {
      this.serviceOfferService.updateService(this.currentServiceId, formData).subscribe({
        next: (res: any) => {
          const updated = res.data || res;
          const index = this.services.findIndex(s => s._id === updated._id);
          if (index !== -1) {
            this.services[index] = updated;
            this.services = [...this.services];
          }
          this.closeModals();
          this.cdr.detectChanges();
        },
        error: (err) => alert(err.error?.message || 'Update failed')
      });
    } else {
      this.serviceOfferService.addService(formData).subscribe({
        next: (res: any) => {
          const newService = res.data || res;
          this.services = [newService, ...this.services];
          this.closeModals();
          this.cdr.detectChanges();
        },
        error: (err) => alert(err.error?.message || 'Add failed')
      });
    }
  }

  deleteService(id: string) {
    this.serviceOfferService.deleteService(id).subscribe({
      next: () => {
        this.services = this.services.filter(s => s._id !== id);
        this.cdr.detectChanges();
      }
    });
  }
}
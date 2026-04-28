import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-services.html',
  styleUrl: './manage-services.css',
})
export class ManageServices {
  services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: 'fa-code',
      color: 'secondary',
      tags: ['React', 'Node.js', 'Tailwind']
    }
  ];

  isAddModalOpen = false;
  isEditModalOpen = false;

  currentService: any = {
    title: '',
    icon: 'fa-code',
    description: '',
    color: 'secondary',
    tags: ''
  };

  openAddModal() {
    this.currentService = {
      title: '',
      icon: 'fa-code',
      description: '',
      color: 'secondary',
      tags: ''
    };
    this.isEditModalOpen = false;
    this.isAddModalOpen = true;
  }

  openEditModal(service: any) {
    this.currentService = {
      ...service,
      tags: service.tags.join(', ')
    };
    this.isAddModalOpen = false;
    this.isEditModalOpen = true;
  }

  closeModals() {
    this.isAddModalOpen = false;
    this.isEditModalOpen = false;
  }

  submitService() {
    const tagsArray = this.currentService.tags
      ? this.currentService.tags.split(',').map((t: string) => t.trim())
      : [];

    if (this.isEditModalOpen) {
      const index = this.services.findIndex(s => s.id === this.currentService.id);
      if (index !== -1) {
        this.services[index] = {
          ...this.currentService,
          tags: tagsArray
        };
      }
    } else {
      const newId = this.services.length > 0
        ? Math.max(...this.services.map(s => s.id)) + 1
        : 1;

      this.services.push({
        ...this.currentService,
        id: newId,
        tags: tagsArray
      });
    }

    this.closeModals();
  }

  deleteService(id: number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.services = this.services.filter(s => s.id !== id);
    }
  }
}
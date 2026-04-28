import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-projects',
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-projects.html',
  styleUrl: './manage-projects.css',
})
export class ManageProjects {
  projects: any[] = [];

  isModalOpen = false;
  isEditMode = false;

  currentProject: any = {
    title: '',
    client: '',
    url: '',
    techStack: '',
    status: 'Completed'
  };

  openModal(project?: any) {
    if (project) {
      this.isEditMode = true;
      this.currentProject = {
        ...project,
        techStack: project.techStack.join(', ')
      };
    } else {
      this.isEditMode = false;
      this.currentProject = {
        title: '',
        client: '',
        url: '',
        techStack: '',
        status: 'Completed'
      };
    }

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitProject() {
    const techArray = this.currentProject.techStack
      ? this.currentProject.techStack.split(',').map((t: string) => t.trim())
      : [];

    if (this.isEditMode) {
      const index = this.projects.findIndex(p => p.id === this.currentProject.id);
      if (index !== -1) {
        this.projects[index] = {
          ...this.currentProject,
          techStack: techArray
        };
      }
    } else {
      const newId = this.projects.length + 1;

      this.projects.push({
        ...this.currentProject,
        id: newId,
        techStack: techArray,
        image: 'https://via.placeholder.com/150'
      });
    }

    this.closeModal();
  }
  getStatusClass(status: string) {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs';

      case 'In Progress':
        return 'bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs';

      case 'Review':
        return 'bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs';

      default:
        return 'bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs';
    }
  }
  deleteProject(id: number) {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}

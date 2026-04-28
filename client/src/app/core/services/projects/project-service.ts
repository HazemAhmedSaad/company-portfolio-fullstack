import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProject } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/projects';

  getProjects() {
    return this.http.get<IProject[]>(this.baseUrl);
  }

  getProjectById(id: string) {
    return this.http.get<IProject>(
      `${this.baseUrl}/${id}`
    );
  }

  addProject(project: FormData) {
    return this.http.post<IProject>(
      this.baseUrl,
      project
    );
  }

  updateProject(id: string, project: FormData) {
    return this.http.put<IProject>(
      `${this.baseUrl}/${id}`,
      project
    );
  }

  deleteProject(id: string) {
    return this.http.delete<IProject>(
      `${this.baseUrl}/${id}`
    );
  }
}


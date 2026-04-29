import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../../core/services/projects/project-service';
import { IProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class Projects implements OnInit {
  private projectService = inject(ProjectService);
  private cdr = inject(ChangeDetectorRef);
  projects: IProject[] = [];

  ngOnInit() {
    this.loadProjects();
    this.cdr.detectChanges()

  }
  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (res: any) => (this.projects = res.data, this.cdr.detectChanges()
      )
      ,
      error: (err) => console.error('Error loading projects', err)
    });
  }

  results = [
    { icon: 'fa-rocket', title: 'Performance', desc: 'Average 40% improvement in app speed' },
    { icon: 'fa-chart-bar', title: 'Growth', desc: '30% increase in user engagement' },
    { icon: 'fa-shield-alt', title: 'Security', desc: 'Enterprise-grade with zero vulnerabilities' },
    { icon: 'fa-clock', title: 'On-Time', desc: '95% on-time project delivery' }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  activeFilter = 'all';

  projects = [
    { title: 'Task Management App', category: 'web', description: 'Collaborative workspace for teams', gradient: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)' },
    { title: 'Analytics Dashboard', category: 'dashboard', description: 'Real-time data visualization', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { title: 'Fashion Marketplace', category: 'ecommerce', description: 'Multi-vendor e-commerce', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { title: 'Fitness App', category: 'mobile', description: 'Workout tracking & community', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { title: 'Business Intelligence', category: 'dashboard', description: 'Executive reporting tool', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { title: 'Booking Platform', category: 'web', description: 'Service reservation system', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    // أضف المزيد هنا...
  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }
}

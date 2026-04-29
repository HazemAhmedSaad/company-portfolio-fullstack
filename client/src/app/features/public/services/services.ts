import { ChangeDetectorRef, Component, inject } from '@angular/core';
import IService from '../../../core/models/service.model';
import { HttpClient } from '@angular/common/http';
import { ServiceOfferService } from '../../../core/services/servicesOffers/service-offer-service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services: IService[] = [];
  private serviceOfferService = inject(ServiceOfferService);
  private cdr = inject(ChangeDetectorRef);
  ngOnInit() {

    this.loadServices();
    this.cdr.detectChanges();
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
  processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding goals and technical requirements.' },
    { num: '02', title: 'Planning', desc: 'Detailed roadmaps and architecture diagrams.' },
    { num: '03', title: 'Design', desc: 'Interactive prototypes and visual mockups.' },
    { num: '04', title: 'Development', desc: 'Building with modern tech and best practices.' },
    { num: '05', title: 'Testing', desc: 'Rigorous QA, performance, and security checks.' },
    { num: '06', title: 'Launch', desc: 'Handled deployment and ongoing support.' }
  ];

  techStack = [
    { category: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Java', '.NET', 'Go'] },
    { category: 'Cloud & DevOps', techs: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] }
  ];
}

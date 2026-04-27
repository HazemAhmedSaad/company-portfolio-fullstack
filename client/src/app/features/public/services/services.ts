import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  services = [
    {
      id: 'web-dev',
      icon: 'fa-globe',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks, scalable architecture, and best practices.',
      features: ['React, Vue.js & Angular expertise', 'Progressive Web Apps (PWA)', 'RESTful & GraphQL APIs', 'SEO-optimized development']
    },
    {
      id: 'mobile',
      icon: 'fa-mobile-alt',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions for iOS and Android with seamless user experiences.',
      features: ['Native iOS & Android development', 'React Native & Flutter apps', 'Mobile UI/UX design', 'Offline functionality']
    },
    {
      id: 'ai',
      icon: 'fa-brain',
      title: 'AI & Machine Learning',
      description: 'Intelligent systems powered by advanced ML models to automate processes and predict outcomes.',
      features: ['Predictive analytics', 'Natural Language Processing', 'Computer vision solutions', 'Chatbot development']
    }
    // يمكنك إضافة باقي الخدمات هنا بنفس النمط...
  ];

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

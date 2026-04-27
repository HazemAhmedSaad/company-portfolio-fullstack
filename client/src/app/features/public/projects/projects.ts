import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
    {
      title: 'NextGen Shopping Platform',
      tag: 'E-commerce',
      description: 'Full-stack e-commerce solution with AI-powered recommendations, real-time inventory management, and multi-vendor support.',
      duration: '6 months',
      teamSize: '8 team members',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Analytics Dashboard Pro',
      tag: 'SaaS',
      description: 'Enterprise analytics platform with real-time data visualization, advanced reporting, and customizable dashboards.',
      duration: '4 months',
      teamSize: '6 team members',
      techStack: ['Vue.js', 'Python', 'MongoDB', 'Google Cloud'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'FitTrack - Fitness Companion',
      tag: 'Mobile App',
      description: 'Cross-platform fitness tracking app with social features, workout recommendations, and wearable device integration.',
      duration: '5 months',
      teamSize: '7 team members',
      techStack: ['React Native', 'Firebase', 'GraphQL', 'AWS'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Smart Content Moderation',
      tag: 'AI/ML',
      description: 'AI-powered content moderation system using computer vision and NLP for automatic flagging and categorization.',
      duration: '3 months',
      teamSize: '5 team members',
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'Google Cloud AI'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Supply Chain Management System',
      tag: 'Enterprise',
      description: 'Comprehensive supply chain platform with logistics optimization, real-time tracking, and predictive analytics.',
      duration: '8 months',
      teamSize: '10 team members',
      techStack: ['Angular', 'Java', 'Oracle', 'AWS'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      title: 'Real Estate Platform',
      tag: 'Web App',
      description: 'Interactive real estate marketplace with virtual tours, mortgage calculators, and AI-powered property recommendations.',
      duration: '7 months',
      teamSize: '9 team members',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
    }
  ];

  results = [
    { icon: 'fa-rocket', title: 'Performance', desc: 'Average 40% improvement in app speed' },
    { icon: 'fa-chart-bar', title: 'Growth', desc: '30% increase in user engagement' },
    { icon: 'fa-shield-alt', title: 'Security', desc: 'Enterprise-grade with zero vulnerabilities' },
    { icon: 'fa-clock', title: 'On-Time', desc: '95% on-time project delivery' }
  ];
}

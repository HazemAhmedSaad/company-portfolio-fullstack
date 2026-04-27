import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-us',
  imports: [CommonModule],
  templateUrl: './hire-us.html',
  styleUrl: './hire-us.css',
})
export class HireUs {
  benefits = [
    'Expert team with proven track record',
    'Transparent communication & agile approach',
    'Dedicated project manager',
    'Post-launch support & maintenance'
  ];

  processSteps = [
    { title: 'Discovery Call', desc: 'Schedule a free 30-minute call to discuss your project, goals, and timeline.' },
    { title: 'Proposal', desc: 'We\'ll send a detailed proposal with scope, timeline, and transparent pricing.' },
    { title: 'Agreement & Kickoff', desc: 'Once approved, we\'ll finalize the agreement and begin the project immediately.' },
    { title: 'Development & Updates', desc: 'Bi-weekly sprints with regular updates, demos, and your input throughout.' },
    { title: 'Testing & Refinement', desc: 'Thorough QA testing, bug fixes, and refinements based on your feedback.' },
    { title: 'Launch & Support', desc: 'Deployment to production with ongoing monitoring and dedicated support.' }
  ];

  pricingPlans = [
    {
      title: 'Project-Based',
      desc: 'Perfect for defined scope projects with clear deliverables',
      features: ['Fixed price & timeline', 'Detailed scope document', 'Dedicated team', '3 months post-launch support'],
      ctaText: 'Starts at $25,000',
      featured: false
    },
    {
      title: 'Team Augmentation',
      desc: 'Extend your team with our experienced developers',
      features: ['Flexible team scaling', 'Weekly invoicing', 'No long-term contracts', 'Full-time commitment'],
      ctaText: '$5,000 - $10,000/week',
      featured: true,
      badge: 'Popular'
    },
    {
      title: 'Retainer',
      desc: 'Ongoing support, maintenance, and enhancements',
      features: ['Dedicated resources', 'Priority support', 'Flexible hours allocation', 'Continuous improvement'],
      ctaText: '$2,000 - $8,000/month',
      featured: false
    }
  ];
}

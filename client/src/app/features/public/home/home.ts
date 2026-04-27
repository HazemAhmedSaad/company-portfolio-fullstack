import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink], templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  services = [
    { title: 'Web Development', desc: 'Custom web applications built with modern frameworks.', icon: 'fa-globe', link: '/services#web-dev' },
    { title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions for iOS and Android.', icon: 'fa-mobile-alt', link: '/services#mobile' },
    { title: 'AI & ML Solutions', desc: 'Intelligent systems powered by AI and machine learning.', icon: 'fa-brain', link: '/services#ai' }
  ];

  projects = [
    { title: 'NextGen Shopping Platform', tag: 'E-commerce', desc: 'Full-stack solution with AI-powered recommendations.', gradient: 'from-[#667eea] to-[#764ba2]', link: '/projects#1' },
    { title: 'Analytics Dashboard Pro', tag: 'SaaS', desc: 'Enterprise analytics platform with real-time visualization.', gradient: 'from-[#f093fb] to-[#f5576c]', link: '/projects#2' }
  ];


  testimonials = [
    {
      initials: 'SM',
      name: 'Sarah Mitchell',
      role: 'CEO, InnovateTech',
      text: '"TechVision transformed our entire digital infrastructure. The team\'s expertise and attention to detail exceeded our expectations."',
      stars: 5
    },
    {
      initials: 'JK',
      name: 'James Khan',
      role: 'Founder, StartupHub',
      text: '"From concept to launch, the entire process was seamless. They delivered on time and within budget. Highly recommended!"',
      stars: 5
    },
    {
      initials: 'ER',
      name: 'Emma Rodriguez',
      role: 'Product Manager, CloudFirst',
      text: '"Exceptional support and continuous improvement. TechVision is a true partner in our success."',
      stars: 5
    }
  ];


  stats = [
    { number: '150+', label: 'Projects Completed', sub: 'Successful deliveries' },
    { number: '99%', label: 'Client Satisfaction', sub: 'Based on feedback' },
    { number: '15+', label: 'Years Experience', sub: 'In digital solutions' },
    { number: '50M', label: 'Lines of Code', sub: 'Clean and scalable' }
  ];

}
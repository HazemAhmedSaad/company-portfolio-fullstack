import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' }
  ];

  serviceLinks = [
    { label: 'Web Development', path: '/services', fragment: 'web-dev' },
    { label: 'Mobile Apps', path: '/services', fragment: 'mobile' },
    { label: 'AI Solutions', path: '/services', fragment: 'ai' },
    { label: 'Cloud Services', path: '/services', fragment: 'cloud' }
  ];

  socials = [
    { icon: 'fab fa-twitter', link: '#', title: 'Twitter' },
    { icon: 'fab fa-linkedin', link: '#', title: 'LinkedIn' },
    { icon: 'fab fa-github', link: '#', title: 'GitHub' },
    { icon: 'fab fa-facebook', link: '#', title: 'Facebook' }
  ];
}

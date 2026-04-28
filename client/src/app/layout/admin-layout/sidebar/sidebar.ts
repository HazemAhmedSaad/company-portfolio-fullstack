import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  currentRoute: string = '';

  menuItems = [
    { path: '/dashboard', icon: 'fa-dashboard', label: 'Dashboard' },
    { path: 'home', icon: 'fa-home', label: 'Home Content' },
    { path: 'about', icon: 'fa-circle-info', label: 'About Page' },
    { path: 'services', icon: 'fa-briefcase', label: 'Services' },
    { path: 'projects', icon: 'fa-folder-open', label: 'Projects' },
    // { path: 'portfolio', icon: 'fa-image', label: 'Portfolio Gallery' },
    { path: 'messages', icon: 'fa-envelope', label: 'Contact Messages' },
    { path: 'team', icon: 'fa-users', label: 'Team Members' },
    // { path: 'settings', icon: 'fa-gear', label: 'Settings' },
  ];



  logout() {
    console.log('Logging out...');
    // هنا يمكنك إضافة منطق تسجيل الخروج وربطه بـ AuthService
  }
}

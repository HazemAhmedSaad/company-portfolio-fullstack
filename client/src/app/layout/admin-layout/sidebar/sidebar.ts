import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  currentRoute: string = '';

  menuItems = [
    { path: '/dashboard', icon: 'fa-grid-2', label: 'Dashboard' },
    { path: '/home', icon: 'fa-home', label: 'Home Content' },
    { path: '/about', icon: 'fa-circle-info', label: 'About Page' },
    { path: '/services', icon: 'fa-briefcase', label: 'Services' },
    { path: '/projects', icon: 'fa-folder-open', label: 'Projects' },
    { path: '/portfolio', icon: 'fa-image', label: 'Portfolio Gallery' },
    { path: '/messages', icon: 'fa-envelope', label: 'Contact Messages' },
    { path: '/team', icon: 'fa-users', label: 'Team Members' },
    { path: '/settings', icon: 'fa-gear', label: 'Settings' },
  ];

  constructor(private router: Router) {
    // مراقبة المسار الحالي لتحديث الحالة النشطة (Active State)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  logout() {
    console.log('Logging out...');
    // هنا يمكنك إضافة منطق تسجيل الخروج وربطه بـ AuthService
  }
}

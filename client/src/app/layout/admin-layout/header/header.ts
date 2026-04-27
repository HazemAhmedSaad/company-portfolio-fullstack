import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logout() {
    console.log('Logging out...');
    // هنا يمكنك إضافة منطق تسجيل الخروج وربطه بـ AuthService
  }
}

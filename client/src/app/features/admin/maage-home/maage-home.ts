import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maage-home',
  imports: [FormsModule],
  templateUrl: './maage-home.html',
  styleUrl: './maage-home.css',
})
export class MaageHome {
  heroData = {
    headline: 'We Build Scalable Digital Solutions',
    subheadline: 'Transform your business with cutting-edge technology and innovative solutions tailored to your needs.',
    primaryBtnText: 'Get Started',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'View Projects',
    secondaryBtnLink: '/projects',
    image: null
  };

  onSave() {
    console.log('Saving Home Content:', this.heroData);
    // هنا يتم استدعاء الخدمة (Service) لحفظ البيانات في قاعدة البيانات
    alert('Changes saved successfully!');
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Image uploaded:', file.name);
      // منطق رفع الصورة
    }
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//  دى زيادة هتتعمل فى  version 2 of website

@Component({
  selector: 'app-manage-home',
  imports: [FormsModule],
  templateUrl: './manage-home.html',
  styleUrl: './manage-home.css',
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
    alert('Changes saved successfully!');
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Image uploaded:', file.name);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // بيانات التواصل
  contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Address', content: '123 Innovation Street, San Francisco, CA 94105' },
    { icon: 'fas fa-phone', title: 'Phone', content: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: 'fas fa-envelope', title: 'Email', content: 'hello@techvision.com', link: 'mailto:hello@techvision.com' },
    { icon: 'fas fa-clock', title: 'Business Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM' }
  ];

  // بيانات الأسئلة الشائعة
  faqs = [
    { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope, typically between 2-12 weeks.', active: false },
    { q: 'Do you offer ongoing support?', a: 'Yes! We offer comprehensive support packages including maintenance and monitoring.', active: false },
    { q: 'What\'s your development methodology?', a: 'We follow Agile/Scrum methodologies with two-week sprints.', active: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].active = !this.faqs[index].active;
  }

  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    // هنا يمكنك ربط الـ API الخاص بك
  }
}

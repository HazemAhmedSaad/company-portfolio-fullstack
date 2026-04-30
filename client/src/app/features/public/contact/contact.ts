import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from '../../../core/services/messages/message-service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private messageService = inject(MessageService);
  private cdr = inject(ChangeDetectorRef);

  isSubmitting = false;
  showSuccessMessage = false;

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', title: 'Address', content: '123 Innovation Street, San Francisco, CA 94105' },
    { icon: 'fas fa-phone', title: 'Phone', content: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: 'fas fa-envelope', title: 'Email', content: 'hello@techvision.com', link: 'mailto:hello@techvision.com' },
    { icon: 'fas fa-clock', title: 'Business Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM' }
  ];

  faqs = [
    { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope, typically between 2-12 weeks.', active: false },
    { q: 'Do you offer ongoing support?', a: 'Yes! We offer comprehensive support packages including maintenance and monitoring.', active: false },
    { q: 'What\'s your development methodology?', a: 'We follow Agile/Scrum methodologies with two-week sprints.', active: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].active = !this.faqs[index].active;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // مارك كل الحقول كـ Touched لإظهار الأخطاء إذا حاول الإرسال وهو فارغ
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    this.isSubmitting = true;

    // قمت بتصحيح اسم الشركة من compenyName إلى companyName للاحترافية
    const messageData = {
      ...form.value,
      companyName: form.value.companyName || 'N/A',
      sentAt: new Date()
    };

    this.messageService.addMessage(messageData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        form.resetForm();
        this.cdr.detectChanges();
        // إخفاء رسالة النجاح بعد 5 ثوانٍ لتعطي فرصة للمستخدم لرؤيتها
        setTimeout(() => (this.showSuccessMessage = false), 5000);
      },
      error: (err) => {
        console.error('Failed to send message:', err);
        this.isSubmitting = false;
        alert('Something went wrong. Please try again later.');
      }
    });
  }
}
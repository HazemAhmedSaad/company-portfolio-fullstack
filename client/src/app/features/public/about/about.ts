import { ChangeDetectorRef, Component, inject } from '@angular/core';
import IMember from '../../../core/models/member.model';
import { MemberService } from './../../../core/services/members/member-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private memberService = inject(MemberService);
  private cdr = inject(ChangeDetectorRef);
  members: IMember[] = [];

  ngOnInit() {
    this.loadMembers();
    this.cdr.detectChanges()

  }
  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: (res: any) => {
        this.members = res.data || res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading members', err)
    });
  }

  values = [
    { title: 'Innovation', icon: 'fas fa-lightbulb', desc: 'We constantly push boundaries and embrace new technologies.' },
    { title: 'Integrity', icon: 'fas fa-handshake', desc: 'Honest communication and ethical practices form our foundation.' },
    { title: 'Collaboration', icon: 'fas fa-users', desc: 'We work as one team with our clients to ensure success.' },
    { title: 'Excellence', icon: 'fas fa-trophy', desc: 'Every detail matters. We strive for perfection in every delivery.' }
  ];

  stats = [
    { num: '150+', label: 'Projects Completed', desc: 'Delivered across various industries' },
    { num: '8+', label: 'Years in Business', desc: 'Proven track record of success' },
    { num: '120+', label: 'Satisfied Clients', desc: 'From startups to enterprise' },
    { num: '98%', label: 'Satisfaction Rate', desc: 'Measured through regular feedback' }
  ];
}

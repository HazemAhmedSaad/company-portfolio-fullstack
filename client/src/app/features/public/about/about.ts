import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 12 years of tech industry experience.',
      gradient: 'from-[#667eea] to-[#764ba2]'
    },
    {
      name: 'Maya Patel',
      role: 'CTO & Co-Founder',
      bio: 'Technical strategist with expertise in scalable architecture.',
      gradient: 'from-[#f093fb] to-[#f5576c]'
    },
    {
      name: 'David Chen',
      role: 'Head of Design',
      bio: 'Creative director focused on user-centered design principles.',
      gradient: 'from-[#4facfe] to-[#00f2fe]'
    },
    {
      name: 'Lisa Anderson',
      role: 'Lead Developer',
      bio: 'Full-stack engineer specializing in cloud technologies.',
      gradient: 'from-[#fa709a] to-[#fee140]'
    }
  ];

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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maage-about',
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-about.html',
  styleUrl: './manage-about.css',
})
export class MaageAbout {
  companyInfo = {
    story: 'Founded in 2018, TechVision has been at the forefront of digital innovation...',
    mission: 'To empower businesses with innovative digital solutions...',
    vision: 'To be the globally recognized leader in digital transformation...'
  };

  stats: any = {
    experience: 6,
    clients: 150,
    projects: 300,
    team: 50,
  };
  teamMembers = [
    { id: 1, name: 'John Smith', role: 'CEO & Founder', avatar: 'team1' },
    { id: 2, name: 'Sarah Johnson', role: 'CTO', avatar: 'team2' },
    { id: 3, name: 'Mike Davis', role: 'Design Lead', avatar: 'team3' },
    { id: 4, name: 'Emily Brown', role: 'Project Manager', avatar: 'team4' }
  ]

  saveInfo() {
    console.log('Saving Info:', this.companyInfo);
    // Logic to call API
  }

  editMember(member: any) {
    console.log('Editing member:', member.name);
  }

  deleteMember(id: number) {
    this.teamMembers = this.teamMembers.filter(m => m.id !== id);
  }
}

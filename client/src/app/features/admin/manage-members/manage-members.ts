import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-members',
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-members.html',
  styleUrl: './manage-members.css',
})
export class ManageMembers {
  team = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of industry experience. Passionate about innovation.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      skills: ['Leadership', 'Strategy']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technology expert driving innovation. Specialized in architecture and cloud solutions.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      skills: ['Architecture', 'Node.js']
    }
  ];

  isModalOpen = false;
  isEditMode = false;
  currentMember: any = { name: '', role: '', bio: '', skills: '' };

  openModal(member?: any) {
    this.isEditMode = !!member;
    this.currentMember = member
      ? { ...member, skills: member.skills.join(', ') }
      : { name: '', role: '', bio: '', skills: '' };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitMember() {
    const skillsArray = this.currentMember.skills.split(',').map((s: string) => s.trim());

    if (this.isEditMode) {
      const index = this.team.findIndex(m => m.id === this.currentMember.id);
      this.team[index] = { ...this.currentMember, skills: skillsArray };
    } else {
      const newMember = {
        ...this.currentMember,
        id: Date.now(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.currentMember.name}`,
        skills: skillsArray
      };
      this.team.push(newMember);
    }
    this.closeModal();
  }

  deleteMember(id: number) {
    if (confirm('Remove this member from the team?')) {
      this.team = this.team.filter(m => m.id !== id);
    }
  }

}

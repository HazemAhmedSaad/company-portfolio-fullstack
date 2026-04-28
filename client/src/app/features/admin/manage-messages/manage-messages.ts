import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-messages.html',
  styleUrl: './manage-messages.css'
})
export class ManageMessages {

  messages = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      status: 'New',
      time: '2 hours ago',
      content: "Hi, I'm interested in your web development services..."
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      status: 'Replied',
      time: '1 day ago',
      content: "Great portfolio! Can you provide more details..."
    }
  ];

  // status styles
  statusClasses: any = {
    'New': 'bg-indigo-100 text-indigo-700',
    'Read': 'bg-slate-100 text-slate-600',
    'Replied': 'bg-emerald-100 text-emerald-700'
  };

  borderClasses: any = {
    'New': 'border-l-indigo-500',
    'Read': 'border-l-slate-200',
    'Replied': 'border-l-slate-200'
  };

  // reply modal
  isReplyModalOpen = false;
  selectedMessage: any = null;
  replyText = '';

  openReplyModal(msg: any) {
    this.selectedMessage = msg;
    this.replyText = '';
    this.isReplyModalOpen = true;
  }

  closeReplyModal() {
    this.isReplyModalOpen = false;
  }

  sendReply() {
    if (!this.replyText.trim()) return;

    console.log('Reply:', this.replyText);

    if (this.selectedMessage) {
      this.selectedMessage.status = 'Replied';
    }

    this.closeReplyModal();
  }

  deleteMessage(id: number) {
    if (confirm('Are you sure you want to delete this message?')) {
      this.messages = this.messages.filter(m => m.id !== id);
    }
  }
}
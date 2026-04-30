import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../core/services/messages/message-service';
import { IMessageData, IMessageUpdat } from '../../../core/models/messages.model';


@Component({
  selector: 'app-manage-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-messages.html',
  styleUrl: './manage-messages.css'
})
export class ManageMessages implements OnInit {
  readonly messageService = inject(MessageService);
  readonly cdr = inject(ChangeDetectorRef);
  messages: IMessageData[] = [];
  isReplyModalOpen = false;
  selectedMessage: IMessageData | null = null;
  replyText = '';

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessages().subscribe({
      next: (res: any) => {
        this.messages = res.data || res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading messages:', err)
    });
  }

  getStatusLabel(msg: IMessageData): string {
    if (msg.isAnswered) return 'Replied';
    if (msg.isRead) return 'Read';
    return 'New';
  }

  updateStatus(msg: IMessageData, type: 'read' | 'spam' | 'answered') {
    const update: IMessageUpdat = {
      isRead: type === 'read' ? !msg.isRead : msg.isRead,
      isSpam: type === 'spam' ? !msg.isSpam : msg.isSpam,
      isAnswered: type === 'answered' ? !msg.isAnswered : msg.isAnswered
    };

    this.messageService.updateMessage(msg._id, update).subscribe({
      next: () => {
        if (type === 'read') msg.isRead = update.isRead;
        if (type === 'spam') msg.isSpam = update.isSpam;
        if (type === 'answered') msg.isAnswered = update.isAnswered;

        this.cdr.detectChanges();
      },
      error: (err) => console.error('Update failed:', err)
    });
  }

  openReplyModal(msg: IMessageData) {
    this.selectedMessage = msg;
    this.replyText = '';
    this.isReplyModalOpen = true;

    if (!msg.isRead) {
      this.updateStatus(msg, 'read');
    }
  }

  closeReplyModal() {
    this.isReplyModalOpen = false;
  }

  sendReply() {
    if (!this.replyText.trim() || !this.selectedMessage) return;
    this.updateStatus(this.selectedMessage, 'answered');
    this.closeReplyModal();
    this.cdr.detectChanges();
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id).subscribe({
      next: () => {
        this.messages = this.messages.filter(m => m._id !== id);
        this.cdr.detectChanges();
      }
    })
    this.cdr.detectChanges();
  }
}
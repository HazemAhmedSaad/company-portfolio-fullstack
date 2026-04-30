import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMessage, IMessageUpdat } from '../../models/messages.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/messages';
  // get all messages
  getMessages() {
    return this.http.get<IMessage[]>(this.baseUrl);
  }

  //add contact message
  addMessage(message: IMessage) {
    return this.http.post<IMessage>(this.baseUrl, message);
  }

  // update contact message
  updateMessage(id: string, message: IMessageUpdat) {
    return this.http.put<IMessageUpdat>(`${this.baseUrl}/${id}`, message);
  }
}

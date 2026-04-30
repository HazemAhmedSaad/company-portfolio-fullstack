import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import IMember from '../../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/members';

  getMembers() {
    return this.http.get<IMember[]>(this.baseUrl);
  }

  getMemberById(id: string) {
    return this.http.get<IMember>(
      `${this.baseUrl}/${id}`
    );
  }

  addMember(member: FormData) {
    return this.http.post<IMember>(
      this.baseUrl,
      member
    );
  }

  updateMember(id: string, member: FormData) {
    return this.http.put<IMember>(
      `${this.baseUrl}/${id}`,
      member
    );
  }

  deleteMember(id: string) {
    return this.http.delete<IMember>(
      `${this.baseUrl}/${id}`
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import IService from '../../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceOfferService {
  readonly http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/services';

  getServices() {
    return this.http.get<IService[]>(this.baseUrl);
  }


  getServiceById(id: string) {
    return this.http.get<IService>(
      `${this.baseUrl}/${id}`
    );
  }

  addService(service: FormData) {
    return this.http.post<IService>(
      this.baseUrl,
      service
    );
  }

  updateService(id: string, service: FormData) {
    return this.http.put<IService>(
      `${this.baseUrl}/${id}`,
      service
    );
  }

  deleteService(id: string) {
    return this.http.delete<IService>(
      `${this.baseUrl}/${id}`
    );
  }
}

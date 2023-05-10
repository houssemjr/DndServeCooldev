import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class KeycloakApiService {
  private baseUrl = 'http://localhost:8080/auth/admin/realms/MySSOApplications';

  constructor(private http: HttpClient) { }

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    if (token) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + token);
    }
    return new HttpHeaders();
  }

  getUsers(): Observable<any[]> {
    const headers = this.getAuthorizationHeader();

    return this.http.get<any[]>(`${this.baseUrl}/users`, { headers });
  }
}

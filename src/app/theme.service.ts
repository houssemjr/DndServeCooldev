import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private baseUrl = 'http://localhost:8085/Forum/App';

  constructor(private http: HttpClient) { }

  ajouterTheme(theme: Theme): Observable<any> {
    return this.http.post(`${this.baseUrl}/addT`, theme);
  }

  updateTheme(idT: number, theme: Theme): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateT/${idT}`, theme);
  }

  afficherThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.baseUrl}/AfficherT`);
  }

  deleteTheme(idT: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteT/${idT}`);
  }
}

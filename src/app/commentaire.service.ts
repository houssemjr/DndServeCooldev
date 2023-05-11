import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from './models/commentaire.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  
  private baseUrl = 'http://localhost:8085/Forum/App';

  constructor(private http: HttpClient) { }

  ajouterCommentaire(commentaire: Commentaire): Observable<any> {
    return this.http.post(`${this.baseUrl}/addC2`, commentaire);
  }

  updateCommentaire(idC: number, commentaire: Commentaire): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateC/${idC}`, commentaire);
  }

  afficherCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/AfficherC`);
  }

  deleteCommentaire(idC: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteC/${idC}`);
  }
}

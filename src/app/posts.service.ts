import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './models/posts.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private baseUrl = 'http://localhost:8085/Forum/App';

  constructor(private http: HttpClient) { }

  ajouterPost(post: Posts): Observable<any> {
    return this.http.post(`${this.baseUrl}/addP`, post);
  }

  updatePost(idp: number, pub: Posts): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateP/${idp}`, pub);
  }

  afficherpost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.baseUrl}/AfficherP`);
  }

  deletePost(idp: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteP/${idp}`);
  }
}
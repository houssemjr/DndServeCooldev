import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResesrvationRoom } from './reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResesrvationRoomService {

  constructor(private http: HttpClient) { 
    
  }

  getAllReservations(): Observable<ResesrvationRoom[]> {
    return this.http.get<ResesrvationRoom[]>('http://localhost:9090/resRoom/show');
  }

  deleteRes(idReservation: number): Observable<void> {  
    return this.http.delete<void>('http://localhost:9090/resRoom/delete/' + idReservation);
  }

  addRes(reservation:ResesrvationRoom, id_Room : number)  {
    /*console.log(reservation);
    console.log(id_Room);*/
    return this.http.post('http://localhost:9090/resRoom/add/' + id_Room , reservation);
      
  }
  startOfRes(): Observable<void> {
    return this.http.get<void>('http://localhost:9090/resRoom/startOfRes');
  }
  disponibilite(idReservation:number, id_Room : number):Observable<boolean>{
    return this.http.get<boolean>('http://localhost:9090/resRoom/dispoParDate/'+idReservation+'/'+id_Room);
  }

}

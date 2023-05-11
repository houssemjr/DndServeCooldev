import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  

  constructor(private http: HttpClient) { 
    
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:9090/room/show');
  }

  deleteRoom(idRoom: number): Observable<void> {
    return this.http.delete<void>('http://localhost:9090/room/delete/' + idRoom);
  }

  addRoom(room:any)  {
    return this.http.post('http://localhost:9090/room/add', room);     
  }

}

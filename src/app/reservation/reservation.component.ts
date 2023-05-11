import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { ResesrvationRoom } from '../reservation';
import { ResesrvationRoomService } from '../reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  availableRooms: any[]=[];
  resevations:any[]=[];
  

  constructor(
    private roomService: RoomService,
    private reservationService: ResesrvationRoomService
    ) { }

  ngOnInit(): void {
    
    
    this.getRes();
    this.roomService.getAllRooms().subscribe((rooms: any[]) => {
      console.log(rooms);
      this.availableRooms = rooms;
    });

  }

  getRes() {
    this.reservationService.getAllReservations().subscribe(
      (res: ResesrvationRoom[]) => {
        console.log(res);
        this.resevations = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRes(idRes:number) {
    this.reservationService.deleteRes(idRes).subscribe(
      (res) => {
        console.log(res);
        this.getRes();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}


import { Component, OnInit } from '@angular/core';
import { Room } from 'src/room';
import { RoomService } from '../room.service';
import { ResesrvationRoomService } from '../reservation.service';
import { ResesrvationRoom } from '../reservation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservation: ResesrvationRoom = {
    idReservation: null,
    dateReservation: null,
    duration: null,
    nbPerson: null,
    room:null,
    user: null
  };
  availableRooms: Room[] = [];
  
  idRoom!:number;
  constructor(
    private reservationService: ResesrvationRoomService, 
    private roomService: RoomService) { }

  ngOnInit(): void {
  
    this.roomService.getAllRooms().subscribe((rooms: Room[]) => {
      this.availableRooms = rooms;
    });
  }

  onSubmit(): void {
    
          this.reservationService.addRes(this.reservation,this.idRoom).subscribe((reservation: any) => {
            console.log(`Reservation ajoutée avec succès : `+this.reservation);
            // Réinitialisation du formulaire
            this.reservation = {
              idReservation: null,
              dateReservation: null,
              duration: null,
              nbPerson: null,
              room: null,
              user: null
            };
            
          }, (error: any) => {
            console.error(error);
          })
       
      }
    
    
   
  }





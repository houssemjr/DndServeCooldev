import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from 'src/room';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[]=[];
  roomRequest: any = {};

  constructor(private roomService:RoomService) {
    
   }

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms() {
    this.roomService.getAllRooms().subscribe(
      (res: Room[]) => {
        console.log(res);
        this.rooms = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRoom(idRoom:number) {
    this.roomService.deleteRoom(idRoom).subscribe(
      (res) => {
        console.log(res);
        this.getRooms();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register(registerForm: NgForm) {
    this.roomService.addRoom(registerForm.value).subscribe(
      (resp : any) => {
        console.log(resp);
        registerForm.reset();
        this.getRooms();
      },
      (err : any) => {
        console.log(err);
      }
    );
  }

  

}

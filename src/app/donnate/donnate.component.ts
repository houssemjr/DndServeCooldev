import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donnate',
  templateUrl: './donnate.component.html',
  styleUrls: ['./donnate.component.css']
})
export class DonnateComponent implements OnInit {

  Donnation:any;
  constructor(private donationService:DonationService) { }

  ngOnInit(): void {
    this.Donnation ={
      firstName:null,
      lastName:null,
      email:null
    }
  }
  
  register(registerForm: NgForm) {
    this.donationService.createDonnation(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
     
      },
      (err) => {
        console.log(err);
      }
    );

}

}

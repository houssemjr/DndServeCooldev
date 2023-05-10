import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';
import { ReservationsComponent } from './reservations/reservations.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    SideBarComponent,
    NavComponent,
    EventsComponent,
    LocationsComponent,
    ReservationsComponent
    
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule 
  ]
})
export class BackofficeModule { }

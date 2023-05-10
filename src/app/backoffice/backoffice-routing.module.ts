import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DishComponent } from './dish/dish.component';
import { TablesComponent } from './Tables/tables.component';
import { OrderComponent } from './order/order.component';
import { EventsComponent } from './events/events.component';
import { LocationsComponent } from './locations/locations.component';
import { ReservationsComponent } from './reservations/reservations.component';



const routes: Routes = [
  { path: 'dish', component: AdminLayoutComponent,children :[
    {path:'',component:DishComponent}
  ] },{ path: '', component: AdminLayoutComponent,children :[
    {path:'',component:DashboardComponent}
  ] },{ path: 'table', component: AdminLayoutComponent,children :[
    {path:'',component:TablesComponent}
  ] },{ path: 'order', component: AdminLayoutComponent,children :[
    {path:'',component:OrderComponent}
  ] },{ path: 'events', component: AdminLayoutComponent,children :[
    {path:'',component:EventsComponent}
  ] },{ path: 'locations', component: AdminLayoutComponent,children :[
    {path:'',component:LocationsComponent}
  ] },{ path: 'reservations', component: AdminLayoutComponent,children :[
    {path:'',component:ReservationsComponent}
  ] }
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

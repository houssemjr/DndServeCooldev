import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DishComponent } from './dish/dish.component';
import { TablesComponent } from './Tables/tables.component';
import { OrderComponent } from './order/order.component';
import { RoomComponent } from '../room/room.component';
import { ReservationComponent} from '../reservation/reservation.component';



const routes: Routes = [
  { path: 'dish', component: AdminLayoutComponent,children :[
    {path:'',component:DishComponent}
  ] },{ path: '', component: AdminLayoutComponent,children :[
    {path:'',component:DashboardComponent}
  ] },{ path: 'table', component: AdminLayoutComponent,children :[
    {path:'',component:TablesComponent}
  ] },{ path: 'order', component: AdminLayoutComponent,children :[
    {path:'',component:OrderComponent}
  ] },{ path: 'room', component: AdminLayoutComponent,children :[
    {path:'',component:RoomComponent}
  ] },{ path: 'reservation', component: AdminLayoutComponent,children :[
    {path:'',component:ReservationComponent}
  ] }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

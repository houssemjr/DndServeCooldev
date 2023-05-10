import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DishComponent } from './backoffice/dish/dish.component';
import { DishFrontComponent } from './dish-front/dish-front.component';
import { ForumComponent } from './forum/forum.component';
import { DonnateComponent } from './donnate/donnate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { HdComponent } from './hd/hd.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [   
 {path:'home',component:HomeComponent},

{ path: 'dishs', component: DishComponent },
{ path: 'd', component: DashboardComponent },
{ path: 'dishFront', component: DishFrontComponent},
{ path: 'allu', component: AllusersComponent},

{ path: 'forum', component: ForumComponent },
{ path: 'donnate', component: DonnateComponent },
{ path: 'admin', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },
{path:"welcome",component: WelcomeComponent},
{path:'hd', component:HdComponent},
{path:"**",redirectTo:"home",pathMatch:"full",}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

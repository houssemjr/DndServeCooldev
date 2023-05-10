import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DishComponent } from './backoffice/dish/dish.component';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './backoffice/Tables/tables.component';
import { OrderComponent } from './backoffice/order/order.component';
import { DonationComponent } from './donation/donation.component';
import { DishFrontComponent } from './dish-front/dish-front.component';
import { ForumComponent } from './forum/forum.component';
import { DonnateComponent } from './donnate/donnate.component';
import { ReserveComponent } from './reserve/reserve.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HdComponent } from './hd/hd.component';
import { InterComponent } from './inter/inter.component';
import { AllusersComponent } from './allusers/allusers.component';
import { KeycloakAngularModule,KeycloakService } from 'keycloak-angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    WhyusComponent,
    CourseComponent,
    ContactComponent,
    FooterComponent,
    DishComponent,
    TablesComponent,
    OrderComponent,
    DonationComponent,
    DishFrontComponent,
    ForumComponent,
    DonnateComponent,
    ReserveComponent,
    WelcomeComponent,
    NavbarComponent,
    HdComponent,
    InterComponent,
    AllusersComponent,
   
    
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
     FormsModule,
     HttpClientModule,
     KeycloakAngularModule,
     
     
     
     
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

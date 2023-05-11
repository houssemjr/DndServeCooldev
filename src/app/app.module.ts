import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ThemeComponent } from './theme/theme.component';



const appRoute: Routes = [
{path:'posts', component: PostsComponent},
{path:'theme', component: ThemeComponent},
{path:'commentaire', component: CommentaireComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentaireComponent,
    ThemeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

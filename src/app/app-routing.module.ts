import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

const routes: Routes = [
  {path:"post",component:PostsComponent},
  {path:"comment",component:CommentaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

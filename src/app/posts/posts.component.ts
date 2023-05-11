import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts.model';
import { Router } from '@angular/router';
import { PostService } from '../posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {

  posts: Posts[] = [];
  newPost: Posts = new Posts();
  selectedPost: Posts | null = null;

  constructor(private router: Router,
    private postService: PostService) { }
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.afficherpost().subscribe(
      posts => this.posts = posts,
      error => console.log(error)
    );
  }

ajouterPost() {
    this.postService.ajouterPost(this.newPost).subscribe(
      response => {
        console.log(response);
        this.getPosts();
        this.newPost = new Posts();
      },
      error => console.log(error)
    );
    location.reload();

  }
  updatePost(idp: number, post: Posts) {
  console.log('Updating publication with id: ', idp);
  console.log('Publication data: ', post);
  /* publication.likess = Number(publication.likess);
  publication.nbrsignal= Number(publication.nbrsignal); */
  

  this.postService.updatePost(idp, post).subscribe(
    response => {
      console.log('Update response: ', response);
      this.getPosts();
    },
    error => console.log('Update error: ', error)
  );
}


  deletePosts(idP: number) {
    if (confirm('Etes vous sur que vous voulez supprimer cette Publication?')) {
      this.postService.deletePost(idP).subscribe(
        () => {
          this.posts = this.posts.filter(p => p.idP !== idP);
          console.log(`Publication avec l'id ${idP} est supprimée`);
        },
        error => console.log(error)
      );
    }
}

showTooltip(post: Posts) {
  this.selectedPost = post;
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
  
    tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';

  }
 
}

navigateTocommentaire(): void {
  this.router.navigate(['/commentaires']);
}

scrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
navigateTopost(): void {
  this.router.navigate(['/posts']);
}

}

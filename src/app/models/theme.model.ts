import { Commentaire } from "./commentaire.model";
import { Posts } from "./posts.model"; 

export class Theme {
    idT: number;
  nameT: string;
  Posts: Posts;
  commentaires: Commentaire[];

  constructor() {
    this.idT = 0;
    this.nameT = '';
    this.Posts = new Posts();
    this.commentaires = [];
  }
}

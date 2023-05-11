import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Commentaire } from '../models/commentaire.model'; 
import { CommentaireService } from '../commentaire.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  commentaires: Commentaire[] = [];
  newCommentaire: Commentaire = new Commentaire();
  selectedCommentaire: Commentaire | null = null;

  constructor(private router: Router, private commentaireService: CommentaireService) { }

  ngOnInit() {
    this.getCommentaires();
  }

  getCommentaires() {
    this.commentaireService.afficherCommentaires().subscribe(
      commentaires => this.commentaires = commentaires,
      error => console.log(error)
    );
  }

  ajouterCommentaire() {
    this.commentaireService.ajouterCommentaire(this.newCommentaire).subscribe(
      response => {
        console.log(response);
        this.getCommentaires();
        this.newCommentaire = new Commentaire();
      },
      error => console.log(error)
    );
    location.reload();
  }

  updateCommentaire(idC: number, commentaire: Commentaire) {
    this.commentaireService.updateCommentaire(idC, commentaire).subscribe(
      response => {
        console.log(response);
        this.getCommentaires();
      },
      error => console.log(error)
    );
  }

  deleteCommentaire(idC: number) {
    if (confirm('Etes vous sur que vous voulez supprimer ce commentaire?')) {
      this.commentaireService.deleteCommentaire(idC).subscribe(
        () => {
          this.commentaires = this.commentaires.filter(c => c.idC !== idC);
          console.log(`Commentaire avec l'id ${idC} est supprimé`);
        },
        error => console.log(error)
      );
    }
  }
  @ViewChild('tooltip') tooltip!: ElementRef;


  showTooltip(commentaire: Commentaire) {
    this.selectedCommentaire = commentaire;
    console.log(this.selectedCommentaire);
    
    if (this.tooltip) {
      setTimeout(() => {
        this.tooltip.nativeElement.style.display = this.tooltip.nativeElement.style.display === 'none' ? 'block' : 'none';
        console.log(this.tooltip.nativeElement.style.display);
      }, 0);
    }
  }
  
  navigateToPost(): void {
    this.router.navigate(['/Posts']);
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateTothemen(): void {
    this.router.navigate(['/theme']);
  }
}

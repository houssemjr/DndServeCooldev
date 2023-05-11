import { Component, OnInit } from '@angular/core';
import { Theme } from '../models/theme.model'; 
import { ThemeService } from '../theme.service'; 
import { Router } from '@angular/router';
import { Posts } from '../models/posts.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themes: Theme[] = [];
  newTheme: Theme = new Theme();
  selectedTheme: Theme | null = null;

  constructor(private router: Router,
    private themeService: ThemeService) { }

  ngOnInit() {
    this.getThemes();
   
  }

  getThemes() {
    this.themeService.afficherThemes().subscribe(
      themes => this.themes = themes,
      error => console.log(error)
    );
  }

  ajouterTheme() {
    this.themeService.ajouterTheme(this.newTheme).subscribe(
      response => {
        
        this.getThemes();
        this.newTheme = new Theme();
      },
      error => console.log(error)
    );
    location.reload();

  }

  updateTheme(id: number, theme: Theme) {
    console.log('Updating theme with id: ', id);
    console.log('Theme data: ', theme);

    this.themeService.updateTheme(id, theme).subscribe(
      response => {
        console.log('Update response: ', response);
        this.getThemes();
      },
      error => console.log('Update error: ', error)
    );
  }

  deleteTheme(id: number) {
    if (confirm('Etes vous sur que vous voulez supprimer ce Theme?')) {
      this.themeService.deleteTheme(id).subscribe(
        () => {
          this.themes = this.themes.filter(t => t.idT !== id);
          console.log(`Theme avec l'id ${id} est supprimée`);
        },
        error => console.log(error)
      );
    }
  }

  showTooltip(theme: Theme) {
    this.selectedTheme = theme;
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
    }
  }

  navigateToPosts(): void {
    this.router.navigate(['/posts']);
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css'],
  animations: [
    trigger('contentToggle', [
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      state('hidden', style({
        height: 0,
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.3s')
      ]),
      transition('hidden => visible', [
        animate('0.3s')
      ])
    ])
  ]
})
export class InterComponent {


  contentVisible = false;


  constructor() { }

  ngOnInit(): void {
   
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  toggleContent(event: Event) {
    event.preventDefault();
    this.contentVisible = !this.contentVisible;
  }

}







import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakApiService } from '../keycloak-api.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {
  users: any[] =[];

  constructor(
    private keycloakService: KeycloakService,
    private keycloakApiService: KeycloakApiService
  ) {}

  ngOnInit() {
    this.keycloakService
      .isLoggedIn()
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('User is already authenticated');
          this.getUsers();
        } else {
          console.log('User is not authenticated');
          this.keycloakService.login();
        }
      })
      .catch(() => console.error('Error checking authentication status'));
  }

  getUsers() {
    this.keycloakApiService.getUsers().subscribe((users) => {
      this.users = users;
    }, (error) => {
      console.error('Error getting users:', error);
    });
  }
}
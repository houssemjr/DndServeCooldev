import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) { }


  getUserId(): string {
    const accessToken = this.oauthService.getAccessToken();
    const decodedToken: { [key: string]: any } = jwt_decode(accessToken);
    const userId = decodedToken['sub'];
    return userId;
  }
}

import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../sso';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contentVisible = false;
  name : string ='';
  id:any;
  userId: string='';

  constructor(private oauthService: OAuthService,private authService :AuthService) { }

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims :any =this.oauthService.getIdentityClaims();
    this.name=userClaims.name ? userClaims.name :"";
    this.id=userClaims.id ? userClaims.id:"";
    this.userId = this.authService.getUserId();
    console.log(this.userId);


    
    
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
  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login(){
    this.oauthService.initCodeFlow();
  }
  logout(){
    this.oauthService.logOut();
  }
  get token(){
    let claims: any =this.oauthService.getIdentityClaims();
    return claims ? claims:null ;
  }



}

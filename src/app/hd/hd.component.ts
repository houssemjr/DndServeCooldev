import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../sso';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hd',
  templateUrl: './hd.component.html',
  styleUrls: ['./hd.component.css']
})
export class HdComponent {
  contentVisible = false;
  name : string ='';

  constructor(private oauthService: OAuthService , private router: Router) { }

  ngOnInit(): void {
    this.configureSingleSignOn();
    const userClaims :any =this.oauthService.getIdentityClaims();
    this.name=userClaims.name ? userClaims.name :"";
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

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keycloak:{
    issuer:"http://localhost:8080/auth/realms/MySSOApplications",
    redirectUri:"http://localhost:4200/",
    clientId:"sso-app",
    scope:"openid profile email offline_acces"


  }
};


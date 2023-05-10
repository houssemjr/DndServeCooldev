import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";





export const authCodeFlowConfig: AuthConfig = {

    issuer: 'http://localhost:8080/auth/realms/MySSOApplications',

    redirectUri: 'http://localhost:4200/',

    clientId: 'sso-app',
    responseType: 'code',

    scope: 'openid profile',
    

    showDebugInformation: true,
};
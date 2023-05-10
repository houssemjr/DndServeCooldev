import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: "http://localhost:8080/auth",
        realm: "MySSOApplications",
        clientId: "sso-app",
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
      bearerExcludedUrls: ['/assets'],
    });
}

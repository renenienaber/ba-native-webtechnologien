import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-web-authentication',
  templateUrl: './web-authentication.component.html'
})
export class WebAuthenticationComponent extends TechnologyComponent {
  technology: Technology = WEB_AUTHENTICATION;
}

export const WEB_AUTHENTICATION: Technology = {
  name: 'Web Authentication',
  description: 'Ermöglicht die Erstellung und Verwendung von starken auf öffentliche Schlüssel basierende Anmeldeinformationen, um Benutzer zu authentifizieren.',
  featureDetections: [
    {
      apiObject: 'window.PublicKeyCredential',
      detection: 'PublicKeyCredential' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webauthn-2/' },
  ],
  icon: 'fingerprint',
  routerLink: 'web-authentication'
};

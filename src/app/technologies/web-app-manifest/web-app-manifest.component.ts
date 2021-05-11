import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-web-app-manifest',
  templateUrl: './web-app-manifest.component.html'
})
export class WebAppManifestComponent extends TechnologyComponent {
  technology: Technology = WEB_APP_MANIFEST;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.BeforeInstallPromptEvent (exakte Feature Detection nicht möglich)',
      detection: 'BeforeInstallPromptEvent' in window
    }
  ];
}

export const WEB_APP_MANIFEST: Technology = {
  name: 'Web App Manifest',
  description: 'Erlaubt das Hinzufügen der Anwendung auf Betriebssystemebene und fügt weitere native Funktionen hinzu.',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/appmanifest/' },
    { name: 'CanIUse', link: 'https://caniuse.com/web-app-manifest' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/Manifest' },
  ],
  icon: 'get_app',
  routerLink: 'web-app-manifest'
};

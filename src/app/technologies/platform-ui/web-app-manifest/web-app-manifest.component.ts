import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-web-app-manifest',
  templateUrl: './web-app-manifest.component.html'
})
export class WebAppManifestComponent extends TechnologyComponent {
  technology: Technology = WEB_APP_MANIFEST;
}

export const WEB_APP_MANIFEST: Technology = {
  name: 'Web App Manifest',
  description: 'Eine Webtechnologie, mit welcher eine Webseite gegenüber dem Browser als installierbare Anwendung kenntlich gemacht werden kann. Es ist eine auf JSON basierende Datei, welche Metadaten über die Webanwendung enthält und das Aussehen auf dem Homebildschirm, der Programmliste oder dem Desktop definiert, nachdem die Anwendung installiert wird.',
  featureDetections: [],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/appmanifest/' },
  ],
  icon: 'get_app',
  routerLink: 'web-app-manifest'
};

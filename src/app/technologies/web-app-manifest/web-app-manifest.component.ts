import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-web-app-manifest',
  templateUrl: './web-app-manifest.component.html'
})
export class WebAppManifestComponent extends TechnologyComponent {
  technology: Technology = WEB_APP_MANIFEST;
  featureDetections: FeatureDetection[] = [];
}

export const WEB_APP_MANIFEST: Technology = {
  name: 'Web App Manifest',
  icon: 'get_app',
  routerLink: 'web-app-manifest'
};

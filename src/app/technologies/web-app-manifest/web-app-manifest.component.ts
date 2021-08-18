import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {WEB_APP_MANIFEST} from '../technologies';

@Component({
  selector: 'app-web-app-manifest',
  templateUrl: './web-app-manifest.component.html'
})
export class WebAppManifestComponent extends TechnologyComponent {
  technology: Technology = WEB_APP_MANIFEST;
}

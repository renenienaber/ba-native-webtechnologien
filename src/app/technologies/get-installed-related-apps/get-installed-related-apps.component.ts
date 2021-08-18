import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {GET_INSTALLED_RELATED_APPS} from '../technologies';

@Component({
  selector: 'app-get-installed-related-apps',
  templateUrl: './get-installed-related-apps.component.html'
})
export class GetInstalledRelatedAppsComponent extends TechnologyComponent {
  technology: Technology = GET_INSTALLED_RELATED_APPS;
}

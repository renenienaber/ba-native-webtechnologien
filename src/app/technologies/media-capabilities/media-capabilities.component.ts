import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {MEDIA_CAPABILITIES} from '../technologies';

@Component({
  selector: 'app-media-capabilities',
  templateUrl: './media-capabilities.component.html',
})
export class MediaCapabilitiesComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPABILITIES;
}

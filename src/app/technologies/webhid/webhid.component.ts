import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {WEBHID} from '../technologies';

@Component({
  selector: 'app-webhid',
  templateUrl: './webhid.component.html'
})
export class WebhidComponent extends TechnologyComponent {
  technology: Technology = WEBHID;
}

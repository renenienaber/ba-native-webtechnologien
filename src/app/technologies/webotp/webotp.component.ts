import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {WEBOTP} from '../technologies';

@Component({
  selector: 'app-webotp',
  templateUrl: './webotp.component.html'
})
export class WebotpComponent extends TechnologyComponent {
  technology: Technology = WEBOTP;
}

import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEBUSB} from '../../technologies';

@Component({
  selector: 'app-webusb',
  templateUrl: './webusb.component.html'
})
export class WebusbComponent extends TechnologyComponent {
  technology: Technology = WEBUSB;
}


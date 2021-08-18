import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_SERIAL} from '../../technologies';

@Component({
  selector: 'app-web-serial',
  templateUrl: './web-serial.component.html'
})
export class WebSerialComponent extends TechnologyComponent {
  technology: Technology = WEB_SERIAL;
}

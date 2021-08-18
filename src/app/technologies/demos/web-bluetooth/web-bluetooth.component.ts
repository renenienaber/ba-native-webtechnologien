import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_BLUETOOTH} from '../../technologies';

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html'
})
export class WebBluetoothComponent extends TechnologyComponent {
  technology: Technology = WEB_BLUETOOTH;
}

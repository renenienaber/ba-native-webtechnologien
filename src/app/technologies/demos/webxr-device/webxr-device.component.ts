import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {WEBXR_DEVICE} from '../../technologies';

@Component({
  selector: 'app-webxr-device',
  templateUrl: './webxr-device.component.html'
})
export class WebxrDeviceComponent extends TechnologyComponent {
  technology: Technology = WEBXR_DEVICE;
}

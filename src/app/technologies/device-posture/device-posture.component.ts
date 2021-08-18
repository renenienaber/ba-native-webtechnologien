import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {DEVICE_POSTURE} from '../technologies';

@Component({
  selector: 'app-device-posture',
  templateUrl: './device-posture.component.html',
  styles: [
  ]
})
export class DevicePostureComponent extends TechnologyComponent {
  technology: Technology = DEVICE_POSTURE;
}


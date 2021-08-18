import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {INPUT_DEVICE_CAPABILITIES} from '../technologies';

@Component({
  selector: 'app-input-device-capabilities',
  templateUrl: './input-device-capabilities.component.html'
})
export class InputDeviceCapabilitiesComponent extends TechnologyComponent {
  technology: Technology = INPUT_DEVICE_CAPABILITIES;
}

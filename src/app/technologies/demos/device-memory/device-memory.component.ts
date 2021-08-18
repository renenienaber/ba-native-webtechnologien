import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {DEVICE_MEMORY} from '../../technologies';

@Component({
  selector: 'app-device-memory',
  templateUrl: './device-memory.component.html',
  styles: [
  ]
})
export class DeviceMemoryComponent extends TechnologyComponent {
  technology: Technology = DEVICE_MEMORY;
}

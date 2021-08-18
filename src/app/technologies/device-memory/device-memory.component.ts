import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-device-memory',
  templateUrl: './device-memory.component.html',
  styles: [
  ]
})
export class DeviceMemoryComponent extends TechnologyComponent {
  technology: Technology = DEVICE_MEMORY;
}

export const DEVICE_MEMORY: Technology = {
  name: 'Device Memory',
  description: 'Definiert eine API, mit der die ungefähre Größe des Arbeitsspeichers des Endgerätes ausgelesen werden kann.',
  featureDetections: [
    {
      apiObject: 'navigator.deviceMemory',
      detection: 'deviceMemory' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/device-memory-1/' },
  ],
  icon: 'memory',
  routerLink: 'device-memory'
};

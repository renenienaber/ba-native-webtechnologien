import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';
import {isObjectInUIEvent} from '../functions';

@Component({
  selector: 'app-input-device-capabilities',
  templateUrl: './input-device-capabilities.component.html'
})
export class InputDeviceCapabilitiesComponent extends TechnologyComponent {
  technology: Technology = INPUT_DEVICE_CAPABILITIES;
}

export const INPUT_DEVICE_CAPABILITIES: Technology = {
  name: 'Input Device Capabilities',
  description: 'Definiert eine Webtechnologie, um zusätzliche Informationen über die Fähigkeiten eines Gerätes zu erlangen, welches Eingabeereignisse auslöst.',
  featureDetections: [
    {
      apiObject: 'UIEvent.sourceCapabilities()',
      detection: isObjectInUIEvent('sourceCapabilities')
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/input-device-capabilities/' },
  ],
  icon: 'perm_device_information',
  routerLink: 'input-device-capabilities'
};

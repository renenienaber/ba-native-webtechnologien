import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-webxr-device',
  templateUrl: './webxr-device.component.html'
})
export class WebxrDeviceComponent extends TechnologyComponent {
  technology: Technology = WEBXR_DEVICE;
}

export const WEBXR_DEVICE: Technology = {
  name: 'WebXR Device API',
  description: 'Die Spezifikation definiert Funktionen für Geräte im Kontext von Virtual Reality (VR) und Augmented Reality (AR).',
  featureDetections: [
    {
      apiObject: 'navigator.xr',
      detection: 'xr' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webxr/' },
  ],
  icon: 'view_in_ar',
  routerLink: 'webxr-device'
};

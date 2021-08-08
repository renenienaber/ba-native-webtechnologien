import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-webusb',
  templateUrl: './webusb.component.html'
})
export class WebusbComponent extends TechnologyComponent {
  technology: Technology = WEBUSB;
}

export const WEBUSB: Technology = {
  name: 'WebUSB API',
  description: 'Eine Webtechnologie für den Zugriff auf per USB angeschlossene Geräte.',
  featureDetections: [
    {
      apiObject: 'navigator.usb',
      detection: 'usb' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/webusb/' },
  ],
  icon: 'usb',
  routerLink: 'webusb'
};

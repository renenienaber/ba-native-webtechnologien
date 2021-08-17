import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-web-serial',
  templateUrl: './web-serial.component.html'
})
export class WebSerialComponent extends TechnologyComponent {
  technology: Technology = WEB_SERIAL;
}

export const WEB_SERIAL: Technology = {
  name: 'Web Serial API',
  description: 'Ermöglicht den Zugriff auf mit dem Endgerät verbundene serielle Geräte.',
  featureDetections: [
    {
      apiObject: 'navigator.serial',
      detection: 'serial' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/serial/' },
  ],
  icon: 'settings_input_hdmi',
  routerLink: 'web-serial'
};

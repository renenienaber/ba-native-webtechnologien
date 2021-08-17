import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-webhid',
  templateUrl: './webhid.component.html'
})
export class WebhidComponent extends TechnologyComponent {
  technology: Technology = WEBHID;
}

export const WEBHID: Technology = {
  name: 'WebHID API',
  description: 'Ermöglicht den Zugriff auf Geräte, welche das HID-Protokoll unterstützen. Ein Human Interface Device (HID) ist eine Geräteart, die Eingaben von Menschen engegennimmt oder Ausgaben für diese bereitstellt.',
  featureDetections: [
    {
      apiObject: 'navigator.hid',
      detection: 'hid' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/webhid/index.html' },
  ],
  icon: 'input',
  routerLink: 'webhid'
};

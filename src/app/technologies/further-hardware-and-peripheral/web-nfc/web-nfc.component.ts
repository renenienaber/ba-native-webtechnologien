import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-web-nfc',
  templateUrl: './web-nfc.component.html'
})
export class WebNfcComponent extends TechnologyComponent {
  technology: Technology = WEB_NFC;
}
export const WEB_NFC: Technology = {
  name: 'Web NFC',
  description: 'Ermöglicht den Zugriff auf im Gerät verbaute Funktionalitäten über Near Field Communication (NFC), welche die drahtlose Kommunikation zwischen Geräten über kurze Distanzen erlaubt.',
  featureDetections: [
    {
      apiObject: 'window.NDEFReader',
      detection: 'NDEFReader' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/web-nfc/' },
  ],
  icon: 'nfc',
  routerLink: 'web-nfc'
};

import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html'
})
export class WebBluetoothComponent extends TechnologyComponent {
  technology: Technology = WEB_BLUETOOTH;
}
export const WEB_BLUETOOTH: Technology = {
  name: 'Web Bluetooth',
  description: 'Eine Webtechnologie für den Zugriff auf Bluetoothfunktionalitäten und ermöglicht somit die Interaktion mit anderen bluetoothfähigen Geräten.',
  featureDetections: [
    {
      apiObject: 'window.Bluetooth',
      detection: 'Bluetooth' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://webbluetoothcg.github.io/web-bluetooth/' },
  ],
  icon: 'bluetooth',
  routerLink: 'web-bluetooth'
};


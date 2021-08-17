import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html'
})
export class BatteryStatusComponent extends TechnologyComponent {
  technology: Technology = BATTERY_STATUS;
}

export const BATTERY_STATUS: Technology = {
  name: 'Battery Status API',
  description: 'Mithilfe dieser API lassen sich Informationen zum Batteriestatus des Endgerätes auslesen.',
  featureDetections: [
    {
      apiObject: 'navigator.getBattery()',
      detection: 'getBattery' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/battery-status/' },
  ],
  icon: 'battery_full',
  routerLink: 'battery-status'
};

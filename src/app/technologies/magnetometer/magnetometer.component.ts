import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-magnetometer',
  templateUrl: './magnetometer.component.html'
})
export class MagnetometerComponent extends TechnologyComponent {
  technology: Technology = MAGNETOMETER;
}

export const MAGNETOMETER: Technology = {
  name: 'Magnetometer',
  description: 'Ermöglicht unter Verwendung der Generic Sensor API den Zugriff auf Informationen eines verbauten Magnetometers zur Erkennung des zugrundeliegenden Magnetfeldes.',
  featureDetections: [
    {
      apiObject: 'window.Magnetometer',
      detection: 'Magnetometer' in window,
    },
    {
      apiObject: 'window.UncalibratedMagnetometer',
      detection: 'UncalibratedMagnetometer' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/magnetometer/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'travel_explore',
  routerLink: 'magnetometer'
};

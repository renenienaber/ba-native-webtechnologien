import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';

@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.component.html'
})
export class GyroscopeComponent extends TechnologyComponent {
  technology: Technology = GYROSCOPE;
}

export const GYROSCOPE: Technology = {
  name: 'Gyroscope',
  description: 'API für den Zugriff auf Sensorinformationen, welche unter Verwendung der Generic Sensor API die Drehgeschwindigkeit des Gerätes entlang aller drei Achsen wiedergibt.',
  featureDetections: [
    {
      apiObject: 'window.Gyroscope',
      detection: 'Gyroscope' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/gyroscope/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'speed',
  routerLink: 'gyroscope'
};

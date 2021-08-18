import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html'
})
export class AccelerometerComponent extends TechnologyComponent {
  technology: Technology = ACCELEROMETER;
}

export const ACCELEROMETER: Technology = {
  name: 'Accelerometer',
  description: 'Liefert die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen und stellt eine Erweiterung der Generic Sensor API-Spezifikation dar.',
  featureDetections: [
    {
      apiObject: 'window.Accelerometer',
      detection: 'Accelerometer' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/accelerometer/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'speed',
  routerLink: 'accelerometer'
};

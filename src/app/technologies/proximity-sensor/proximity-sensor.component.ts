import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';

@Component({
  selector: 'app-proximity-sensor',
  templateUrl: './proximity-sensor.component.html',
  styles: [
  ]
})
export class ProximitySensorComponent extends TechnologyComponent {
  technology: Technology = PROXIMITY_SENSOR;
}

export const PROXIMITY_SENSOR: Technology = {
  name: 'Proximity Sensor',
  description: 'Die Webtechnologie ist eine Schnittstelle für den Zugriff auf Informationen eines gegebenenfalls verbauten Näherungssensors und erweitert die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.ProximitySensor',
      detection: 'ProximitySensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/proximity/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'nearby_error',
  routerLink: 'proximity-sensor'
};

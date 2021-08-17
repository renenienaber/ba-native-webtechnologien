import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-geolocation-sensor',
  templateUrl: './geolocation-sensor.component.html'
})
export class GeolocationSensorComponent extends TechnologyComponent {
  technology: Technology = GEOLOCATION_SENSOR;
}

export const GEOLOCATION_SENSOR: Technology = {
  name: 'Geolocation Sensor',
  description: 'Ermöglicht den Zugriff auf geografische Standortinformationen des Endgerätes unter Nutzung der Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.GeolocationSensor',
      detection: 'GeolocationSensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/geolocation-sensor/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'location_on',
  routerLink: 'geolocation-sensor'
};

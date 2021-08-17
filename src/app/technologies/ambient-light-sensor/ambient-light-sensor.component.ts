import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-ambient-light-sensor',
  templateUrl: './ambient-light-sensor.component.html'
})
export class AmbientLightSensorComponent extends TechnologyComponent {
  technology: Technology = AMBIENT_LIGHT_SENSOR;
}

export const AMBIENT_LIGHT_SENSOR: Technology = {
  name: 'Ambient Light Sensor',
  description: 'Dient dem Zugriff auf Informationen eines verbauten Lichtsensors, welcher die Helligkeit in der Umgebung erkennt. Sie erweitert dazu die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.AmbientLightSensor',
      detection: 'AmbientLightSensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/ambient-light/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'wb_sunny',
  routerLink: 'ambient-light-sensor'
};

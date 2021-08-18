import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {GEOLOCATION_SENSOR} from '../../technologies';

@Component({
  selector: 'app-geolocation-sensor',
  templateUrl: './geolocation-sensor.component.html'
})
export class GeolocationSensorComponent extends TechnologyComponent {
  technology: Technology = GEOLOCATION_SENSOR;
}

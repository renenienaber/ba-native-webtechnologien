import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {AMBIENT_LIGHT_SENSOR} from '../technologies';

@Component({
  selector: 'app-ambient-light-sensor',
  templateUrl: './ambient-light-sensor.component.html'
})
export class AmbientLightSensorComponent extends TechnologyComponent {
  technology: Technology = AMBIENT_LIGHT_SENSOR;
}

import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {PROXIMITY_SENSOR} from '../technologies';

@Component({
  selector: 'app-proximity-sensor',
  templateUrl: './proximity-sensor.component.html',
  styles: [
  ]
})
export class ProximitySensorComponent extends TechnologyComponent {
  technology: Technology = PROXIMITY_SENSOR;
}

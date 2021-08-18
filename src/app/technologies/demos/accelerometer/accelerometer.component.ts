import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {ACCELEROMETER} from '../../technologies';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html'
})
export class AccelerometerComponent extends TechnologyComponent {
  technology: Technology = ACCELEROMETER;
}

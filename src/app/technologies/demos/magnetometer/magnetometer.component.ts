import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {MAGNETOMETER} from '../../technologies';

@Component({
  selector: 'app-magnetometer',
  templateUrl: './magnetometer.component.html'
})
export class MagnetometerComponent extends TechnologyComponent {
  technology: Technology = MAGNETOMETER;
}

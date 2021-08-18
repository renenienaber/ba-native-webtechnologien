import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {COMPUTE_PRESSURE} from '../technologies';

@Component({
  selector: 'app-compute-pressure',
  templateUrl: './compute-pressure.component.html'
})
export class ComputePressureComponent extends TechnologyComponent {
  technology: Technology = COMPUTE_PRESSURE;
}

import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {GYROSCOPE} from '../../technologies';

@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.component.html'
})
export class GyroscopeComponent extends TechnologyComponent {
  technology: Technology = GYROSCOPE;
}

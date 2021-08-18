import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {IDLE_DETECTION} from '../technologies';

@Component({
  selector: 'app-idle-detection',
  templateUrl: './idle-detection.component.html'
})
export class IdleDetectionComponent extends TechnologyComponent {
  technology: Technology = IDLE_DETECTION;
}


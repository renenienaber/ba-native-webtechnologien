import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {BATTERY_STATUS} from '../../technologies';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html'
})
export class BatteryStatusComponent extends TechnologyComponent {
  technology: Technology = BATTERY_STATUS;
}


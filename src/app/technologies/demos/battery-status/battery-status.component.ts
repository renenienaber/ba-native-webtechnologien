import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.css']
})
export class BatteryStatusComponent extends TechnologyDemoComponent {
  batteryManager: any;

  getBattery(): void {
    if ('getBattery' in navigator) {
      // @ts-ignore
      navigator.getBattery()
        .then(res => this.batteryManager = res)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.getBattery()');
    }
  }
}

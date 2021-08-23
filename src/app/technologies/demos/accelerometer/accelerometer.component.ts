import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent extends TechnologyDemoComponent {
  sensor: any;

  initAndStartSensor(): void {
    if ('Accelerometer' in window) {
      // @ts-ignore
      this.sensor = new Accelerometer();
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.Accelerometer');
    }
  }
}

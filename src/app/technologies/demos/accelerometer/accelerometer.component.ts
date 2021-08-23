import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent extends TechnologyDemoComponent {
  private sensor: any;
  results: AccelerometerData;

  initAndStartSensor(): void {
    if ('Accelerometer' in window) {
      // @ts-ignore
      this.sensor = new Accelerometer({frequency: 60});
      this.sensor.addEventListener('reading', () => {
          this.results = {x: this.sensor.x, y: this.sensor.y, z: this.sensor.z};
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.Accelerometer');
    }
  }
}

interface AccelerometerData {
  x?: number;
  y?: number;
  z?: number;
}

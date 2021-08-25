import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-magnetometer',
  templateUrl: './magnetometer.component.html'
})
export class MagnetometerComponent extends TechnologyDemoComponent {
  private sensor: any;
  private uncalibratedSensor: any;
  results: MagnetometerData;
  uncalibratedResults: UncalibratedMagnetometerData;

  initAndStartSensor(): void {
    if ('Magnetometer' in window) {
      // @ts-ignore
      this.sensor = new Magnetometer({frequency: 60});
      this.sensor.addEventListener('reading', () => {
          this.results = {x: this.sensor.x, y: this.sensor.y, z: this.sensor.z};
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.Magnetometer');
    }
  }

  initAndStartUncalibratedSensor(): void {
    if ('UncalibratedMagnetometer' in window) {
      // @ts-ignore
      this.uncalibratedSensor = new UncalibratedMagnetometer({frequency: 60});
      this.uncalibratedSensor.addEventListener('reading', () => {
          this.uncalibratedResults = {
            x: this.uncalibratedSensor.x, y: this.uncalibratedSensor.y, z: this.uncalibratedSensor.z,
            xBias: this.uncalibratedSensor.xBias, yBias: this.uncalibratedSensor.yBias, zBias: this.uncalibratedSensor.zBias
          };
        }
      );
      this.uncalibratedSensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.uncalibratedSensor.start();
    } else {
      this.showNoSupportError('window.UncalibratedMagnetometer');
    }
  }
}

interface MagnetometerData {
  x?: number;
  y?: number;
  z?: number;
}
interface UncalibratedMagnetometerData {
  x?: number;
  y?: number;
  z?: number;
  xBias?: number;
  yBias?: number;
  zBias?: number;
}

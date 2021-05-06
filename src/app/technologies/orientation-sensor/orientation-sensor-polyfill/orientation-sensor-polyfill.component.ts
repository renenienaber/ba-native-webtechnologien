import { Component } from '@angular/core';
import {AbsoluteOrientationSensor, RelativeOrientationSensor} from '../../../../polyfills/motion-sensors.js';

@Component({
  selector: 'app-orientation-sensor-polyfill',
  templateUrl: './orientation-sensor-polyfill.component.html',
  styleUrls: ['./orientation-sensor-polyfill.component.css']
})
export class OrientationSensorPolyfillComponent {
  private errorNoSensorAvailable = 'Es ist kein Sensor verfügbar.';

  private sensor: any;
  private mat4 = new Float32Array(16);
  header: string;

  initAbsolute(): void {
    this.sensor = new AbsoluteOrientationSensor({frequency: 60});
    this.header = 'Absolute';
    this.useSensor();
  }
  initRelative(): void {
    this.sensor = new RelativeOrientationSensor({frequency: 60});
    this.header = 'Relative';
    this.useSensor();
  }

  private useSensor(): void {
    this.sensor.onreading = () => {
      this.sensor.populateMatrix(this.mat4);
      document.getElementById('response').innerHTML =
        this.mat4.map(val => (Math.round(val * 100) / 100)).toString();
    };
    this.sensor.onerror = (sensorErrorEvent) => {
      document.getElementById('response').innerHTML =
        sensorErrorEvent.error.name === 'NotReadableError' ? this.errorNoSensorAvailable : sensorErrorEvent.error.message;
    };
    this.sensor.start();
  }
}

import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {FeatureDetection, Technology} from '../technology';
import {AbsoluteOrientationSensor, RelativeOrientationSensor} from '../../../polyfills/motion-sensors';

@Component({
  selector: 'app-orientation-sensor-polyfill',
  templateUrl: './orientation-sensor-polyfill.component.html',
  styleUrls: ['./orientation-sensor-polyfill.component.css']
})
export class OrientationSensorPolyfillComponent extends TechnologyComponent {
  technology: Technology = ORIENTATION_SENSOR_POLYFILL;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.AbsoluteOrientationSensor',
      detection: 'AbsoluteOrientationSensor' in window
    },
    {
      apiObject: 'window.RelativeOrientationSensor',
      detection: 'RelativeOrientationSensor' in window
    }
  ];

  private errorNoAbsoluteOrientationSensor = 'window.AbsoluteOrientationSensor wird nicht unterstützt!';
  private errorNoRelativeOrientationSensor = 'window.RelativeOrientationSensor wird nicht unterstützt!';
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
        sensorErrorEvent.error.message;
    };
    this.sensor.start();
  }
}

export const ORIENTATION_SENSOR_POLYFILL: Technology = {
  name: 'Orientation Sensor Polyfill',
  description: '',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-sensor/'},
    { name: 'CanIUse', link: 'https://caniuse.com/orientation-sensor' },
    { name: 'Polyfill', link: 'https://github.com/kenchris/sensor-polyfills'}
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor-polyfill'
};

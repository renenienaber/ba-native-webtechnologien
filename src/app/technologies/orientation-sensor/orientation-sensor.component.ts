import {Component} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';
import {AbsoluteOrientationSensor, RelativeOrientationSensor} from '../../../polyfills/motion-sensors';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html'
})
export class OrientationSensorComponent extends TechnologyComponent {
  technology: Technology = ORIENTATION_SENSOR_API;
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
  private errorUsingPolyfill = 'POLYFILL wird eingesetzt!';
  private errorNoSensorAvailable = 'Es ist kein Sensor verfügbar.';

  private sensor: any;
  private mat4 = new Float32Array(16);
  header: string;

  initAbsolute(): void {
    if (!('AbsoluteOrientationSensor' in window)) {
      this.showError(`${this.errorNoAbsoluteOrientationSensor} ${this.errorUsingPolyfill}`);
    }
    this.sensor = new AbsoluteOrientationSensor({frequency: 60});
    this.header = 'Absolute';
    this.useSensor();
  }
  initRelative(): void {
    if (!('RelativeOrientationSensor' in window)) {
      this.showError(`${this.errorNoRelativeOrientationSensor} ${this.errorUsingPolyfill}`);
    }
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

export const ORIENTATION_SENSOR_API: Technology = {
  name: 'Orientation Sensor API',
  description: '',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-sensor/'},
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
    { name: 'CanIUse', link: 'https://caniuse.com/orientation-sensor' },
    { name: 'Mozilla Developer Network (Sensor APIs)', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs' },
    { name: 'Polyfill', link: 'https://github.com/kenchris/sensor-polyfills' }
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor-api'
};

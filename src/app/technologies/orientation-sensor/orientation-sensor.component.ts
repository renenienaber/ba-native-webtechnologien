import {Component} from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html'
})
export class OrientationSensorComponent extends TechnologyComponent {
  technology: Technology = ORIENTATION_SENSOR;

  private errorNoAbsoluteOrientationSensor = 'window.AbsoluteOrientationSensor';
  private errorNoRelativeOrientationSensor = 'window.RelativeOrientationSensor';
  private errorNoSensorAvailable = 'Es ist kein Sensor verfügbar.';

  private sensor: any;
  private mat4 = new Float32Array(16);
  header: string;

  initAbsolute(): void {
    if ('AbsoluteOrientationSensor' in window) {
      // @ts-ignore
      this.sensor = new AbsoluteOrientationSensor({frequency: 60});
      this.header = 'Absolute';
      this.useSensor();
    } else {
      this.showNoSupportError(this.errorNoAbsoluteOrientationSensor);
    }
  }
  initRelative(): void {
    if ('RelativeOrientationSensor' in window) {
      // @ts-ignore
      this.sensor = new RelativeOrientationSensor({frequency: 60});
      this.header = 'Relative';
      this.useSensor();
    } else {
      this.showNoSupportError(this.errorNoRelativeOrientationSensor);
    }
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

export const ORIENTATION_SENSOR: Technology = {
  name: 'Orientation Sensor',
  description: 'Definiert eine Webtechnologie zur Erfassung der physischen Orientierung des Endgerätes und erweitert die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.AbsoluteOrientationSensor',
      detection: 'AbsoluteOrientationSensor' in window
    },
    {
      apiObject: 'window.RelativeOrientationSensor',
      detection: 'RelativeOrientationSensor' in window
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-sensor/'},
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor'
};

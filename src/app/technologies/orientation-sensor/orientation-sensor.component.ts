import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html',
  styleUrls: ['./orientation-sensor.component.css']
})
export class OrientationSensorComponent extends TechnologyComponent implements OnInit {
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

  errorNoAbsoluteOrientationSensor = 'window.AbsoluteOrientationSensor wird nicht unterstützt!';
  errorNoRelativeOrientationSensor = 'window.RelativeOrientationSensor wird nicht unterstützt!';
  errorNoSensorAvailable = 'Es ist kein Sensor verfügbar.';

  sensorAbsolute: any;
  sensorRelative: any;
  mat4Absolute = new Float32Array(16);
  mat4Relative = new Float32Array(16);

  ngOnInit(): void {
    if ('AbsoluteOrientationSensor' in window) {
      this.initAbsolute();
    }
    if ('RelativeOrientationSensor' in window) {
      this.initRelative();
    }
  }

  private initAbsolute(): void {
    // @ts-ignore
    this.sensorAbsolute = new AbsoluteOrientationSensor({frequency: 60});
    this.sensorAbsolute.onreading = () => {
      this.sensorAbsolute.populateMatrix(this.mat4Absolute);
      document.getElementById('absoluteCoordinates').innerHTML =
      this.mat4Absolute.map(val => Math.round(val * 100) / 10).toString();
    };
    this.sensorAbsolute.start();
  }

  private initRelative(): void {
    // @ts-ignore
    this.sensorRelative = new RelativeOrientationSensor({frequency: 60});
    this.sensorRelative.onreading = () => {
      this.sensorRelative.quaternion(this.mat4Relative);
      document.getElementById('relativeCoordinates').innerHTML =
        this.mat4Relative.toString();
    };
    this.sensorRelative.start();
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
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor-api'
};

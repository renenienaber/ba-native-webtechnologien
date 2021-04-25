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

  // @ts-ignore
  sensor: any;
  mat4: Float32Array;

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
    this.sensor = new AbsoluteOrientationSensor();
    this.useSensor('absolute');
  }

  private initRelative(): void {
    // @ts-ignore
    this.sensor = new RelativeOrientationSensor();
    this.useSensor('relative');
  }

  private useSensor(htmlElement: 'absolute' | 'relative'): void {
    this.mat4 = new Float32Array(16);
    this.sensor.onreading = () => {
      this.sensor.populateMatrix(this.mat4);
      document.getElementById(`${htmlElement}Coordinates`).innerHTML =
        this.mat4.map(val => Math.round(val * 100) / 100).toString();
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
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor-api'
};

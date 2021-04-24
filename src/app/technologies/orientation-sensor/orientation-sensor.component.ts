import { Component, OnInit } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html',
  styleUrls: ['./orientation-sensor.component.css']
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

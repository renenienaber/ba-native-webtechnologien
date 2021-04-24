import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './device-orientation.component.html',
  styleUrls: ['./device-orientation.component.css']
})
export class DeviceOrientationComponent extends TechnologyComponent {
  technology: Technology = DEVICE_ORIENTATION_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.DeviceOrientationEvent',
      detection: 'DeviceOrientationEvent' in window
    }
  ];

  private errorNoDeviceOrientationEvent = 'window.DeviceOrientationEvent wird nicht unterstützt!';

  alpha: number;
  beta: number;
  gamma: number;
  absolute: boolean;

  constructor() {
    super();
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
    } else {
      this.showError(this.errorNoDeviceOrientationEvent);
    }
  }

  deviceOrientationEventHandler(eventData: any): void {
    this.alpha = Math.round(eventData.alpha);
    this.beta = Math.round(eventData.beta);
    this.gamma = Math.round(eventData.gamma);
    this.absolute = eventData.absolute;

    document.getElementById('alpha').innerHTML = this.alpha.toString();
    document.getElementById('beta').innerHTML = this.beta.toString();
    document.getElementById('gamma').innerHTML = this.gamma.toString();
    document.getElementById('absolute').innerHTML = this.absolute.toString();

    document.getElementById('cube').style.transform =
      'rotateX(' + this.beta + 'deg) ' +
      'rotateY(' + this.gamma + 'deg) ' +
      'rotateZ(' + this.alpha + 'deg)';
  }
}

export const DEVICE_ORIENTATION_API: Technology = {
  name: 'DeviceOrientation Event API',
  description: '',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-event/' },
    { name: 'CanIUse', link: 'https://caniuse.com/deviceorientation' },
    { name: 'Mozilla Developer Network', link: '' },
  ],
  icon: 'screen_rotation',
  routerLink: 'device-orientation-api'
};

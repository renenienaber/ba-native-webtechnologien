import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './device-orientation.component.html',
  styleUrls: ['./device-orientation.component.css']
})
export class DeviceOrientationComponent extends TechnologyComponent implements OnInit, OnDestroy {
  technology: Technology = DEVICE_ORIENTATION_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.DeviceOrientationEvent',
      detection: 'DeviceOrientationEvent' in window
    }
  ];

  errorNoDeviceOrientationEvent = 'window.DeviceOrientationEvent wird nicht unterstützt!';

  ngOnInit() {
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
  }

  deviceOrientationEventHandler(eventData: any): void {
    const alpha = Math.round(eventData.alpha);
    const beta = Math.round(eventData.beta);
    const gamma = Math.round(eventData.gamma);
    const absolute = eventData.absolute;

    document.getElementById('alpha').innerHTML = alpha.toString();
    document.getElementById('beta').innerHTML = beta.toString();
    document.getElementById('gamma').innerHTML = gamma.toString();
    document.getElementById('absolute').innerHTML = absolute.toString();

    document.getElementById('cube').style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg) rotateZ(${alpha}deg)`;
  }
}

export const DEVICE_ORIENTATION_API: Technology = {
  name: 'DeviceOrientation Event API',
  description: '',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-event/' },
    { name: 'CanIUse', link: 'https://caniuse.com/deviceorientation' },
  ],
  icon: 'screen_rotation',
  routerLink: 'device-orientation-api'
};

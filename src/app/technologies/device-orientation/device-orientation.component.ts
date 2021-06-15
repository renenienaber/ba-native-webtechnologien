import {Component, OnDestroy, OnInit} from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './device-orientation.component.html'
})
export class DeviceOrientationComponent extends TechnologyComponent implements OnInit, OnDestroy {
  technology: Technology = DEVICE_ORIENTATION_API;

  errorNoDeviceOrientationEvent = 'window.DeviceOrientationEvent wird nicht unterstützt!';

  ngOnInit() {
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
  }

  isSupported(): boolean {
    return 'DeviceOrientationEvent' in window;
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
  }
}

export const DEVICE_ORIENTATION_API: Technology = {
  name: 'DeviceOrientation Event API',
  description: '',
  featureDetections: [
    {
      apiObject: 'window.DeviceOrientationEvent',
      detection: 'DeviceOrientationEvent' in window
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-event/' },
    { name: 'CanIUse', link: 'https://caniuse.com/deviceorientation' },
  ],
  icon: 'screen_rotation',
  routerLink: 'device-orientation-api'
};

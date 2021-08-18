import {Component, OnDestroy, OnInit} from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './deviceorientation-event.component.html'
})
export class DeviceorientationEventComponent extends TechnologyComponent implements OnInit, OnDestroy {
  technology: Technology = DEVICEORIENTATION_EVENT;

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

export const DEVICEORIENTATION_EVENT: Technology = {
  name: 'DeviceOrientation Event API',
  description: 'Ermöglicht den Zugriff auf Informationen über die physische Haltung und Bewegung eines Endgerätes.',
  featureDetections: [
    {
      apiObject: 'window.DeviceOrientationEvent',
      detection: 'DeviceOrientationEvent' in window
    },
    {
      apiObject: 'window.DeviceMotionEvent',
      detection: 'DeviceMotionEvent' in window
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-event/' },
  ],
  icon: 'screen_rotation',
  routerLink: 'deviceorientation-event'
};

import {Component, OnDestroy, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './deviceorientation-event.component.html'
})
export class DeviceorientationEventComponent extends TechnologyDemoComponent {
  orientationListenerAdded = false;
  orientationResults: OrientationData;

  errorNoDeviceOrientationEvent = 'window.DeviceOrientationEvent wird nicht unterstützt!';

  // ngOnDestroy() {
  //   window.removeEventListener('deviceorientation', this.deviceOrientationEventHandler, false);
  // }

  // deviceOrientationEventHandler(eventData: any): void {
  //   const alpha = Math.round(eventData.alpha);
  //   const beta = Math.round(eventData.beta);
  //   const gamma = Math.round(eventData.gamma);
  //   const absolute = eventData.absolute;
  //
  //   document.getElementById('alpha').innerHTML = alpha.toString();
  //   document.getElementById('beta').innerHTML = beta.toString();
  //   document.getElementById('gamma').innerHTML = gamma.toString();
  //   document.getElementById('absolute').innerHTML = absolute.toString();
  // }

  private deviceOrientationEventHandler(event: DeviceOrientationEvent): void {
    this.orientationResults = {
      alpha: Math.round(event.alpha),
      beta: Math.round(event.beta),
      gamma: Math.round(event.gamma),
      absolute: event.absolute
    };
  }

  startOrientationDemo(): void {
    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', this.deviceOrientationEventHandler);
    } else {
      this.showNoSupportError('window.DeviceOrientationEvent');
    }
  }
}

interface OrientationData {
  alpha?: number;
  beta?: number;
  gamma?: number;
  absolute: boolean;
}

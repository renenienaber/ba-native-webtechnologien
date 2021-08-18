import {Component, OnDestroy, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './deviceorientation-event.component.html'
})
export class DeviceorientationEventComponent extends TechnologyDemoComponent implements OnInit, OnDestroy {
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

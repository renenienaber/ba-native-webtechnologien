import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-device-posture',
  templateUrl: './device-posture.component.html',
  styles: [
  ]
})
export class DevicePostureComponent extends TechnologyDemoComponent {
  devicePosture: any;

  getDevicePosture(): void {
    if ('devicePosture' in navigator) {
      // @ts-ignore
      this.devicePosture = navigator.devicePosture;
    } else {
      this.showNoSupportError('navigator.devicePosture');
    }
  }
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-device-memory',
  templateUrl: './device-memory.component.html'
})
export class DeviceMemoryComponent extends TechnologyDemoComponent {
  deviceMemory;

  getDeviceMemory(): void {
    if ('deviceMemory' in navigator) {
      // @ts-ignore
      this.deviceMemory = navigator.deviceMemory;
    } else {
      this.showNoSupportError('navigator.deviceMemory');
    }
  }
}

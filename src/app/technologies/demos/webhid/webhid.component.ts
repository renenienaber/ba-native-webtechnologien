import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-webhid',
  templateUrl: './webhid.component.html'
})
export class WebhidComponent extends TechnologyDemoComponent {
  result: any[];

  getHIDDevices(): void {
    if ('hid' in navigator) {
      // @ts-ignore
      if ('getDevices' in navigator.hid) {
        // @ts-ignore
        navigator.hid.getDevices()
          .then(res => this.result = res)
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('navigator.hid.getDevices()');
      }
    } else {
      this.showNoSupportError('navigator.hid');
    }
  }
}

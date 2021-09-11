import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-webhid',
  templateUrl: './webhid.component.html'
})
export class WebhidComponent extends TechnologyDemoComponent {
  result;

  private isSupported(): boolean {
    if ('hid' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.hid');
      return false;
    }
  }

  getHIDDevices(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.hid.getDevices()
        .then(res => this.result = res.map(e => ({
          vendorId: e.vendorId,
          productId: e.productId,
          productName: e.productName
        })))
        .catch(err => this.showError(err));
    }
  }

  requestHIDDevice(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.hid.requestDevice({filters: []})
        .then(res => this.result = res.map(e => ({
          vendorId: e.vendorId,
          productId: e.productId,
          productName: e.productName
        })))
        .catch(err => this.showError(err));
    }
  }
}

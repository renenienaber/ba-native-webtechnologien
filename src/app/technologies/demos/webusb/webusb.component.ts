import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-webusb',
  templateUrl: './webusb.component.html'
})
export class WebusbComponent extends TechnologyDemoComponent {
  result;

  private isSupported(): boolean {
    if ('usb' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.usb');
      return false;
    }
  }

  getUSBDevices(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.usb.getDevices()
        .then(res => this.result = res.map(e => ({
          manufacturerName: e.manufacturerName,
          productName: e.productName,
          serialNumber: e.serialNumber
        })))
        .catch(err => this.showError(err));
    }
  }

  requestUSBDevice(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.usb.requestDevice({filters: []})
        .then(res => this.result = {
          manufacturerName: res.manufacturerName,
          productName: res.productName,
          serialNumber: res.serialNumber
        })
        .catch(err => this.showError(err));
    }
  }
}

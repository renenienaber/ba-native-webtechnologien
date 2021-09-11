import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-serial',
  templateUrl: './web-serial.component.html'
})
export class WebSerialComponent extends TechnologyDemoComponent {
  result;

  private isSupported(): boolean {
    if ('serial' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.serial');
      return false;
    }
  }

  getPorts(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.serial.getPorts()
        .then(res => this.result = res.map(e => ({
          usbVendorId: e.getInfo().usbVendorId,
          usbProductId: e.getInfo().usbProductId
        })))
        .catch(err => this.showError(err));
    }
  }

  requestPort(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.serial.requestPort()
        .then(res => this.result = {
          usbVendorId: res.getInfo().usbVendorId,
          usbProductId: res.getInfo().usbProductId
        })
        .catch(err => this.showError(err));
    }
  }
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html'
})
export class WebBluetoothComponent extends TechnologyDemoComponent {
  result;

  private isSupported(): boolean {
    if ('bluetooth' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.bluetooth');
      return false;
    }
  }

  getBluetoothDevices(): void {
    if (this.isSupported()) {
      // @ts-ignore
      if ('getDevices' in navigator.bluetooth) {
        // @ts-ignore
        navigator.bluetooth.getDevices()
          .then(res => this.result = res.map(e => ({
            id: e.id,
            name: e.name,
          })))
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('navigator.bluetooth.getDevices()');
      }
    }
  }

  requestBluetoothDevice(): void {
    if (this.isSupported()) {
      // @ts-ignore
      if ('requestDevice' in navigator.bluetooth) {
        // @ts-ignore
        navigator.bluetooth.requestDevice({ acceptAllDevices: true })
          .then(res => this.result = {
            id: res.id,
            name: res.name,
          })
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('navigator.bluetooth.requestDevice()');
      }
    }
  }
}

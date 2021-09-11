import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html'
})
export class WebBluetoothComponent extends TechnologyDemoComponent {
  requestDevice(): void {
    if ('bluetooth' in navigator) {
      // @ts-ignore
      navigator.bluetooth.requestDevice({ acceptAllDevices: true })
        .then(device => this.showError('Gerät ausgewählt: ' + device.name))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.bluetooth');
    }
  }
}

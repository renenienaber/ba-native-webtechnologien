import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-input-device-capabilities',
  templateUrl: './input-device-capabilities.component.html',
  styles: [
  ]
})
export class InputDeviceCapabilitiesComponent extends TechnologyDemoComponent {
  capabilities: any;

  getCapabilities(event: UIEvent): void {
    if ('sourceCapabilities' in event) {
      // @ts-ignore
      this.capabilities = event.sourceCapabilities;
    } else {
      this.showNoSupportError('UIEvent.sourceCapabilities');
    }
  }
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html'
})
export class GamepadComponent extends TechnologyDemoComponent {
  result = [];

  getGamepads(): void {
    if ('getGamepads' in navigator) {
      for (const e of navigator.getGamepads()) {
        if (e) {
          this.result.push({
            id: e.id,
            index: e.index,
            connected: e.connected
          });
        }
      }
    } else {
      this.showNoSupportError('navigator.getGamepads()');
    }
  }
}

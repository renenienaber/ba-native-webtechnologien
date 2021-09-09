import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html'
})
export class GamepadComponent extends TechnologyDemoComponent {
  result: Gamepad[];

  getGamepads(): void {
    if ('getGamepads' in navigator) {
      this.result = navigator.getGamepads();
    } else {
      this.showNoSupportError('navigator.getGamepads()');
    }
  }
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-keyboard-map',
  templateUrl: './keyboard-map.component.html'
})
export class KeyboardMapComponent extends TechnologyDemoComponent {
  keyboardMap: any;
  keyboardMapKeys: any[];

  getKeyboardMap(): void {
    // @ts-ignore
    if ('keyboard' in navigator && 'getLayoutMap' in navigator.keyboard) {
      // @ts-ignore
      navigator.keyboard.getLayoutMap()
        .then(res => {
          this.keyboardMap = res;
          this.keyboardMapKeys = [...res.keys()].sort((a, b) => a.localeCompare(b));
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.keyboard.getLayoutMap()');
    }
  }
}

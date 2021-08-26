import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-virtualkeyboard',
  templateUrl: './virtualkeyboard.component.html',
  styles: [
  ]
})
export class VirtualkeyboardComponent extends TechnologyDemoComponent {
  private isSupported(): boolean {
    if ('virtualKeyboard' in navigator) {
      return true;
    }
    this.showNoSupportError('navigator.virtualKeyboard');
    return false;
  }

  show(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.virtualKeyboard.show();
    }
  }

  hide(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.virtualKeyboard.hide();
    }
  }
}

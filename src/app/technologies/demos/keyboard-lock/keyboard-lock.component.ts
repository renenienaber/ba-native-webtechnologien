import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-keyboard-lock',
  templateUrl: './keyboard-lock.component.html',
  styleUrls: ['./keyboard-lock.component.css']
})
export class KeyboardLockComponent extends TechnologyDemoComponent implements OnDestroy {
  locked = false;

  ngOnDestroy(): void {
    if (this.locked) {
      this.unlockKeyboard();
      this.showError('Keyboard Lock wurde wieder aufgehoben');
    }
  }

  lockKeyboard(): void {
    // @ts-ignore
    if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
      // @ts-ignore
      navigator.keyboard.lock()
        .then(() => this.locked = true)
        .catch(err => this.showError(err));
    }
  }

  unlockKeyboard(): void {
    if (this.locked) {
      // @ts-ignore
      navigator.keyboard.unlock();
      this.locked = false;
    }
  }

  activateFullscreen(): void {
    if ('requestFullscreen' in document.documentElement) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
          .catch(err => this.showError(err));
      } else {
        this.showError('Vollbildmodus ist bereits aktiviert.');
      }
    } else {
      this.showNoSupportError('Element.requestFullscreen()');
    }
  }
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-screen-wake-lock',
  templateUrl: './screen-wake-lock.component.html',
  styleUrls: ['./screen-wake-lock.component.css']
})
export class ScreenWakeLockComponent extends TechnologyDemoComponent {
  requestWakeLock(): void {
    if ('wakeLock' in navigator) {
      // @ts-ignore
      navigator.wakeLock.request()
        .then(() => this.showError('WakeLock wurde aktiviert!'))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.wakeLock');
    }
  }
}

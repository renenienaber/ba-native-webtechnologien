import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-screen-wake-lock',
  templateUrl: './screen-wake-lock.component.html',
  styleUrls: ['./screen-wake-lock.component.css']
})
export class ScreenWakeLockComponent extends TechnologyDemoComponent implements OnDestroy {
  wakeLockSentinel;

  ngOnDestroy(): void {
    if (this.wakeLockSentinel) {
      this.releaseWakeLock();
      this.showError('WakeLock wurde wieder aufgehoben');
    }
  }

  requestWakeLock(): void {
    if ('wakeLock' in navigator) {
      // @ts-ignore
      navigator.wakeLock.request()
        .then(sentinel => this.wakeLockSentinel = sentinel)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.wakeLock');
    }
  }

  releaseWakeLock(): void {
    this.wakeLockSentinel.release()
      .then(this.wakeLockSentinel = undefined)
      .catch(err => this.showError(err));
  }
}

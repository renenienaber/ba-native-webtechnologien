import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-screen-wake-lock',
  templateUrl: './screen-wake-lock.component.html'
})
export class ScreenWakeLockComponent extends TechnologyDemoComponent implements OnDestroy {
  wakeLockSentinel;

  ngOnDestroy(): void {
    if (this.wakeLockSentinel) {
      this.releaseWakeLock();
    }
  }

  requestWakeLock(): void {
    if ('wakeLock' in navigator) {
      // @ts-ignore
      navigator.wakeLock.request()
        .then(sentinel => {
          this.wakeLockSentinel = sentinel;
          this.wakeLockSentinel.addEventListener('release', () => this.releaseWakeLock());
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.wakeLock');
    }
  }

  releaseWakeLock(): void {
    this.wakeLockSentinel.release()
      .then(() => {
        this.wakeLockSentinel = undefined;
        this.showError('WakeLock wurde wieder aufgehoben');
      })
      .catch(err => this.showError(err));
  }
}

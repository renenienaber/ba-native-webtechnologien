import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-idle-detection',
  templateUrl: './idle-detection.component.html'
})
export class IdleDetectionComponent extends TechnologyDemoComponent implements OnDestroy {
  private detector: any;

  private abortController: AbortController = new AbortController();
  private abortSignal: AbortSignal = this.abortController.signal;

  threshold = 60000;
  detectorActive = false;
  logs: { timestamp: number, detectorData: DetectorData}[] = [];

  ngOnDestroy(): void {
    this.stopDetector();
  }

  private isSupported(): boolean {
    if ('IdleDetector' in window) {
      return true;
    } else {
      this.showNoSupportError('window.IdleDetector');
      return false;
    }
  }

  requestPermission(): void {
    if (this.isSupported()) {
      // @ts-ignore
      IdleDetector.requestPermission()
        .then(state => {
          if (state !== 'granted') {
            this.showError('Für die Idle Detection wurde keine Erlaubnis erteilt!');
          }
        })
        .catch(err => this.showError(err));
    }
  }

  initAndStartDetector(): void {
    if (this.isSupported()) {
      // @ts-ignore
      this.detector = new IdleDetector();

      this.detector.addEventListener('change', () => {
        this.addLog({
          userState: this.detector.userState,
          screenState: this.detector.screenState
        });
      });

      this.reset();
      this.detector.start({
        threshold: this.threshold,
        signal: this.abortSignal,
      })
        .then(() => this.detectorActive = true)
        .catch(err => this.showError(err));
    }
  }

  stopDetector(): void {
    this.abortController.abort();
    this.detectorActive = false;
  }

  private reset(): void {
    this.abortController = new AbortController();
    this.abortSignal = this.abortController.signal;
    this.logs = [];
  }

  private addLog(detectorData: DetectorData): void {
    this.logs.push({
      timestamp: Date.now(),
      detectorData
    });
  }
}

interface DetectorData {
  userState?: 'active' | 'idle';
  screenState?: 'locked' | 'unlocked';
}

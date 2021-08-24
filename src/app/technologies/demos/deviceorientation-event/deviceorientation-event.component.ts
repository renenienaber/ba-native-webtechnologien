import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-device-orientation',
  templateUrl: './deviceorientation-event.component.html'
})
export class DeviceorientationEventComponent extends TechnologyDemoComponent implements OnDestroy {
  deviceOrientation$: Observable<Event>;
  deviceOrientationSubscription: Subscription;
  deviceMotion$: Observable<Event>;
  deviceMotionSubscription: Subscription;

  orientationResults: OrientationData;
  deviceMotionEvent: DeviceMotionEvent;

  ngOnDestroy() {
    if (this.deviceOrientationSubscription) {
      this.deviceOrientationSubscription.unsubscribe();
    }
    if (this.deviceMotionSubscription) {
      this.deviceMotionSubscription.unsubscribe();
    }
  }

  private deviceOrientationEventHandler(deviceOrientationEvent: DeviceOrientationEvent): void {
    this.orientationResults = {
      alpha: deviceOrientationEvent.alpha,
      beta: deviceOrientationEvent.beta,
      gamma: deviceOrientationEvent.gamma,
      absolute: deviceOrientationEvent.absolute
    };
  }

  private deviceMotionEventHandler(deviceMotionEvent: DeviceMotionEvent): void {
    this.deviceMotionEvent = deviceMotionEvent;
  }

  startOrientationListening(): void {
    if ('DeviceOrientationEvent' in window) {
      this.deviceOrientation$ = fromEvent(window, 'deviceorientation');
      this.deviceOrientationSubscription = this.deviceOrientation$.subscribe(ev =>
        this.deviceOrientationEventHandler(ev as DeviceOrientationEvent)
      );
    } else {
      this.showNoSupportError('window.DeviceOrientationEvent');
    }
  }

  startMotionListening(): void {
    if ('DeviceMotionEvent' in window) {
      this.deviceMotion$ = fromEvent(window, 'devicemotion');
      this.deviceMotionSubscription = this.deviceMotion$.subscribe(ev =>
        this.deviceMotionEventHandler(ev as DeviceMotionEvent)
      );
    } else {
      this.showNoSupportError('window.DeviceMotionEvent');
    }
  }
}

interface OrientationData {
  alpha?: number;
  beta?: number;
  gamma?: number;
  absolute: boolean;
}

import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-screen-wake-lock',
  templateUrl: './screen-wake-lock.component.html',
  styles: [
  ]
})
export class ScreenWakeLockComponent extends TechnologyComponent {
  technology: Technology = SCREEN_WAKE_LOCK;
}

export const SCREEN_WAKE_LOCK: Technology = {
  name: 'Screen Wake Lock API',
  description: 'Ermöglicht es, zu verhindern, dass der Bildschirm nach einer Zeit gesperrt wird bzw. der Bildschirmschoner einsetzt.',
  featureDetections: [
    {
      apiObject: 'navigator.wakeLock',
      detection: 'wakeLock' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-wake-lock/' },
  ],
  icon: 'screen_lock_landscape',
  routerLink: 'screen-wake-lock'
};

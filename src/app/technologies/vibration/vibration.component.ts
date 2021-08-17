import {Component} from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html'
})
export class VibrationComponent extends TechnologyComponent {
  // sets base attributes
  technology = VIBRATION;

  private errorNoVibrate = 'navigator.vibrate wird nicht unterstützt!';

  duration = 200;
  vibrate(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(this.duration);
    } else {
      this.showError(this.errorNoVibrate);
    }
  }

  vibratePattern(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500, 200, 500]);
    } else {
      this.showError(this.errorNoVibrate);
    }
  }
}

export const VIBRATION: Technology = {
  name: 'Vibration API',
  description: 'Ermöglicht den Zugriff auf den Vibrationsmechanismus des Endgeräts.',
  featureDetections: [
    {
      apiObject: 'navigator.vibrate()',
      detection: 'vibrate' in navigator
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/vibration/' }
  ],
  icon: 'vibration',
  routerLink: 'vibration'
};

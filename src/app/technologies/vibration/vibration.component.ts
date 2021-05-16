import {Component} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html'
})
export class VibrationComponent extends TechnologyComponent {
  // sets base attributes
  technology = VIBRATION_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'navigator.vibrate',
      detection: 'vibrate' in navigator
    }
  ];

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

export const VIBRATION_API: Technology = {
  name: 'Vibration API',
  icon: 'vibration',
  routerLink: 'vibration-api'
};

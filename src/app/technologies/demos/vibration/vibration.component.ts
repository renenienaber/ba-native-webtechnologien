import {Component} from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {VIBRATION} from '../../technologies';
import {Technology} from '../../../models/technology';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html'
})
export class VibrationComponent extends TechnologyComponent {
  // sets base attributes
  technology: Technology = VIBRATION;

  private errorNoVibrate = 'navigator.vibrate';

  duration = 200;
  vibrate(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(this.duration);
    } else {
      this.showNoSupportError(this.errorNoVibrate);
    }
  }

  vibratePattern(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500, 200, 500]);
    } else {
      this.showNoSupportError(this.errorNoVibrate);
    }
  }
}

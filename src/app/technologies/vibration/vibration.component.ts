import {Component} from '@angular/core';
import {VIBRATION_API} from '../technology';
import {TechnologyComponent} from '../technology/technology.component';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
})
export class VibrationComponent extends TechnologyComponent {
  // sets base attributes
  technology = VIBRATION_API;
  //
  setFeatureDetections() {
    this.featureDetections.push(
      {
        apiObject: 'navigator.vibrate',
        detection: 'vibrate' in navigator
      },
      {
        apiObject: 'navigator.abc',
        detection: 'abc' in navigator
      }
    );
  }

  duration = 200;
  vibrate(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(this.duration);
    }
  }

  vibratePattern(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 200, 300, 200, 500]);
    }
  }
}

import {Component} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
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

  duration = 200;
  vibrate(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(this.duration);
    }
  }

  vibratePattern(): void {
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500, 200, 500]);
    }
  }
}

export const VIBRATION_API: Technology = {
  name: 'Vibration API',
  description: 'Erlaubt die Nutzung der im Endgerät verbauten Vibration, soweit vorhanden.',
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/vibration/' },
    { name: 'CanIUse', link: 'https://caniuse.com/vibration' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API' },
  ],
  icon: 'vibration',
  routerLink: 'vibration-api'
};

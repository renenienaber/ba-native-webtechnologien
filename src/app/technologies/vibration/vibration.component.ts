import { Component } from '@angular/core';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
})
export class VibrationComponent {
  duration = 200;

  featureDetection(): boolean {
    return 'vibrate' in navigator;
  }

  vibrate(): void {
    if (this.featureDetection()) {
      navigator.vibrate(this.duration);
    }
  }

}

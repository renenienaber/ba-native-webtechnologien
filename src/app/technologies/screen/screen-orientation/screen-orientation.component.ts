import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.component.html'
})
export class ScreenOrientationComponent extends TechnologyComponent {
  technology: Technology = SCREEN_ORIENTATION;
}

export const SCREEN_ORIENTATION: Technology = {
  name: 'Screen Orientation API',
  description: 'Ermöglicht es, den Typ und Winkel der aktuellen Bildschirmausrichtung eines Gerätes zurückzugeben und eine bestimmte Ausrichtung zu fixieren.',
  featureDetections: [
    {
      apiObject: 'window.screen.orientation',
      detection: 'screen' in window && 'orientation' in window.screen,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-orientation/' },
  ],
  icon: 'screen_lock_rotation',
  routerLink: 'screen-orientation'
};

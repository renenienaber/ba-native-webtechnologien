import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-screen-capture',
  templateUrl: './screen-capture.component.html'
})
export class ScreenCaptureComponent extends TechnologyComponent {
  technology: Technology = SCREEN_CAPTURE;
}

export const SCREEN_CAPTURE: Technology = {
  name: 'Screen Capture',
  description: 'Ermöglicht die Erfasung des Bildschirminhalts oder Teile von diesem.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaDevices.getDisplayMedia()',
      detection: 'mediaDevices' in navigator && 'getDisplayMedia' in navigator.mediaDevices,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-capture/' },
  ],
  icon: 'screen_share',
  routerLink: 'screen-capture'
};

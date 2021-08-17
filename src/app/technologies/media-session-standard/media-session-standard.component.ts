import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-media-session-standard',
  templateUrl: './media-session-standard.component.html'
})
export class MediaSessionStandardComponent extends TechnologyComponent {
  technology: Technology = MEDIA_SESSION_STANDARD;
}

export const MEDIA_SESSION_STANDARD: Technology = {
  name: 'Media Session Standard',
  description: 'Ermöglicht es, in Bezug auf Medien benutzerdefinierte Metadaten in Betriebsssystem-UI anzuzeigen, bestehende Steuerungselemente anzupassen und auf Medientasten zuzugreifen.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaSession',
      detection: 'mediaSession' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediasession/' },
  ],
  icon: 'not_started',
  routerLink: 'media-session-standard'
};

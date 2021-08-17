import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-media-capabilities',
  templateUrl: './media-capabilities.component.html',
})
export class MediaCapabilitiesComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPABILITIES;
}

export const MEDIA_CAPABILITIES: Technology = {
  name: 'Media Capabilities',
  description: 'Die Spezifikation definiert Möglichkeiten zur Eruierung der Fähigkeiten hinsichtlich der Ausgabe, Kodierung und Dekodierung eines Gerätes, sodass eine optimale Auswahl und Umsetzung von Medieninhalten für den Nutzer ermöglicht wird.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaCapabilities',
      detection: 'mediaCapabilities' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/media-capabilities/' },
  ],
  icon: 'perm_media',
  routerLink: 'media-capabilities'
};

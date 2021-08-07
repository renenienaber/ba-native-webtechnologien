import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
})
export class PresentationComponent extends TechnologyComponent {
  technology: Technology = PRESENTATION;
}

export const PRESENTATION: Technology = {
  name: 'Presentation API',
  description: 'Ermöglicht den Zugriff auf Präsentations-Displays wie Projektoren, angeschlossene Monitore, netzwerkverbundene Fernsehgeräte oder sonstige Darstellungsgeräte in sowohl kabelgebundener als auch drahtloser Form.',
  featureDetections: [
    {
      apiObject: 'navigator.presentation',
      detection: 'presentation' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/presentation-api/' },
  ],
  icon: 'cast',
  routerLink: 'presentation'
};

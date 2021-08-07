import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-text-detection',
  templateUrl: './text-detection.component.html',
})
export class TextDetectionComponent extends TechnologyComponent {
  technology: Technology = TEXT_DETECTION;
}

export const TEXT_DETECTION: Technology = {
  name: 'Text Detection',
  description: 'Ermöglicht die Erkennung von Texten in Bildern.',
  featureDetections: [
    {
      apiObject: 'window.TextDetector',
      detection: 'TextDetector' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/shape-detection-api/text.html' },
  ],
  icon: 'document_scanner',
  routerLink: 'text-detection'
};

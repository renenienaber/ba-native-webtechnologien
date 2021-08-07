import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-shape-detection',
  templateUrl: './shape-detection.component.html'
})
export class ShapeDetectionComponent extends TechnologyComponent {
  technology: Technology = SHAPE_DETECTION;
}

export const SHAPE_DETECTION: Technology = {
  name: 'Shape Detection',
  description: 'Ermöglicht die Erkennung von Formen wie Gesichter, Barcodes oder QR-Codes in Bildern.',
  featureDetections: [
    {
      apiObject: 'window.FaceDetector',
      detection: 'FaceDetector' in window,
    },
    {
      apiObject: 'window.BarcodeDetector',
      detection: 'BarcodeDetector' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/shape-detection-api/' },
  ],
  icon: 'qr_code_scanner',
  routerLink: 'shape-detection'
};

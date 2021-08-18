import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-mediastream-image-capture',
  templateUrl: './mediastream-image-capture.component.html',
})
export class MediastreamImageCaptureComponent extends TechnologyComponent {
  technology: Technology = MEDIASTREAM_IMAGE_CAPTURE;
}

export const MEDIASTREAM_IMAGE_CAPTURE: Technology = {
  name: 'MediaStream Image Capture',
  description: 'Eine API zur Aufnahme von Bildern durch ein fotografiefähiges Gerät unter der Verwendung von MediaStreamTrack-Objekten.',
  featureDetections: [
    {
      apiObject: 'window.ImageCapture',
      detection: 'ImageCapture' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/image-capture/' },
  ],
  icon: 'image',
  routerLink: 'mediastream-image-capture'
};

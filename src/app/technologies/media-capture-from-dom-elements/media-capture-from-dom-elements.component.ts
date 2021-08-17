import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';
import {isObjectInHtmlElement} from '../functions';

@Component({
  selector: 'app-media-capture-from-dom-elements',
  templateUrl: './media-capture-from-dom-elements.component.html'
})
export class MediaCaptureFromDomElementsComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPTURE_FROM_DOM_ELEMENTS;
}

export const MEDIA_CAPTURE_FROM_DOM_ELEMENTS: Technology = {
  name: 'Media Capture from DOM Elements',
  description: 'In dieser Spezifikation wird definiert, wie Medieninhalte aus DOM-Elementen als MediaStream-Objekt abgerufen werden können.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.captureStream()',
      detection: isObjectInHtmlElement('audio', 'captureStream'),
    },
    {
      apiObject: 'HTMLCanvasElement.captureStream()',
      detection: isObjectInHtmlElement('canvas', 'captureStream'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediacapture-fromelement/' },
  ],
  icon: 'perm_camera_mic',
  routerLink: 'media-capture-from-dom-elements'
};

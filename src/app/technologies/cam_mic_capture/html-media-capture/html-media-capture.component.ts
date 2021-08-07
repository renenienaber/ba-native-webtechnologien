import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-html-media-capture',
  templateUrl: './html-media-capture.component.html',
  styles: [
  ]
})
export class HtmlMediaCaptureComponent extends TechnologyComponent {
  technology: Technology = HTML_MEDIA_CAPTURE;
}

export const HTML_MEDIA_CAPTURE: Technology = {
  name: 'HTML Media Capture',
  description: 'Definiert eine HTML-Erweiterung, die es dem Benutzer ermöglicht, Mediendateien durch die Mechanismen der Ausführungsumgebung, wie beispielsweise die Kamera- oder Mikrofonfunktion, aufzunehmen und auszuwählen.',
  featureDetections: [
    {
      apiObject: 'HTMLInputElement.capture',
      detection: isCaptureInHtmlInputElement()
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/html-media-capture/' },
  ],
  icon: '',
  routerLink: ''
};

function isCaptureInHtmlInputElement(): boolean {
  const htmlInputElement = document.createElement('input');
  return 'capture' in htmlInputElement;
}

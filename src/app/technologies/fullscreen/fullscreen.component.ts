import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';
import {isObjectInHtmlElement} from '../functions';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html'
})
export class FullscreenComponent extends TechnologyComponent {
  technology: Technology = FULLSCREEN;
}

export const FULLSCREEN: Technology = {
  name: 'Fullscreen API',
  description: 'Ermöglicht es, Webanwendungen oder Teile dieser im Vollbildmodus darzustellen.',
  featureDetections: [
    {
      apiObject: 'Element.requestFullscreen()',
      detection: isObjectInHtmlElement('div', 'requestFullscreen'),
    },
    {
      apiObject: 'document.exitFullscreen()',
      detection: 'exitFullscreen' in document,
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://fullscreen.spec.whatwg.org/' },
  ],
  icon: 'settings_overscan',
  routerLink: 'fullscreen'
};

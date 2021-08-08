import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-web-share',
  templateUrl: './web-share.component.html'
})
export class WebShareComponent extends TechnologyComponent {
  technology: Technology = WEB_SHARE;
}

export const WEB_SHARE: Technology = {
  name: 'Web Share API',
  description: 'Ermöglicht das Teilen von Inhalten mit beliebigen vom Benutzer ausgewählten Zielen, wie beispielsweise Anwendungen, Webseiten oder Kontakte.',
  featureDetections: [
    {
      apiObject: 'navigator.share()',
      detection: 'share' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/web-share/' },
  ],
  icon: 'share',
  routerLink: 'web-share'
};

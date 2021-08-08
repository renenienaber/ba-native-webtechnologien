import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-page-visibility',
  templateUrl: './page-visibility.component.html'
})
export class PageVisibilityComponent extends TechnologyComponent {
  technology: Technology = PAGE_VISIBILITY;
}
export const PAGE_VISIBILITY: Technology = {
  name: 'Page Visibility',
  description: 'Mithilfe dieser Webtechnologie kann ermittelt werden, ob eine Webseite für den Benutzer sichtbar ist.',
  featureDetections: [
    {
      apiObject: 'document.visibilityState',
      detection: 'visibilityState' in document,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/page-visibility/' },
  ],
  icon: 'preview',
  routerLink: 'page-visibility'
};

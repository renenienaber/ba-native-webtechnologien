import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-badging',
  templateUrl: './badging.component.html'
})
export class BadgingComponent extends TechnologyComponent {
  technology: Technology = BADGING;
}

export const BADGING: Technology = {
  name: 'Badging API',
  description: 'Ermöglicht es Webseiten und installierten Webanwendungen, außerhalb des Webseiteninhaltes Badges darzustellen.',
  featureDetections: [
    {
      apiObject: 'navigator.setAppBadge()',
      detection: 'setAppBadge' in navigator,
    },
    {
      apiObject: 'navigator.clearAppBadge()',
      detection: 'clearAppBadge' in navigator,
    },
    {
      apiObject: 'navigator.setClientBadge()',
      detection: 'setClientBadge' in navigator,
    },
    {
      apiObject: 'navigator.clearClientBadge()',
      detection: 'clearClientBadge' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/badging/' },
  ],
  icon: 'mark_email_unread',
  routerLink: 'badging'
};

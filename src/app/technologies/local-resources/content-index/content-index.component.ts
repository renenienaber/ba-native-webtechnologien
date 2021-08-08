import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';
import {isObjectInServiceWorkerRegistration} from '../../functions';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html'
})
export class ContentIndexComponent extends TechnologyComponent {
  technology: Technology = CONTENT_INDEX;
}

export const CONTENT_INDEX: Technology = {
  name: 'Content Index',
  description: 'Ermöglicht Webseiten, offlinefähige Inhalte im Browser zu registrieren, sodass dem Benutzer kenntlich gemacht werden kann, welche konkreten Inhalte offline verfügbar sind.',
  featureDetections: [
    {
      apiObject: 'ServiceWorkerRegistration.index',
      detection: isObjectInServiceWorkerRegistration('index'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/content-index/spec/' },
  ],
  icon: 'list',
  routerLink: 'content-index'
};

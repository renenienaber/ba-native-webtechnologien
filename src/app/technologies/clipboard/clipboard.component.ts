import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html'
})
export class ClipboardComponent extends TechnologyComponent {
  technology: Technology = CLIPBOARD;
}

export const CLIPBOARD: Technology = {
  name: 'Clipboard API and Events',
  description: 'Ermöglicht den Zugriff auf Daten in der Systemzwischenablage.',
  featureDetections: [
    {
      apiObject: 'navigator.clipboard',
      detection: 'clipboard' in navigator,
    },
    {
      apiObject: 'window.ClipboardEvent',
      detection: 'ClipboardEvent' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/clipboard-apis/' },
  ],
  icon: 'content_paste',
  routerLink: 'clipboard'
};

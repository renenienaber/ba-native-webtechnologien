import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-local-font-access',
  templateUrl: './local-font-access.component.html'
})
export class LocalFontAccessComponent extends TechnologyComponent {
  technology: Technology = LOCAL_FONT_ACCESS;
}

export const LOCAL_FONT_ACCESS: Technology = {
  name: 'Local Font Access API',
  description: 'Ermöglicht den Zugriff auf in der Ausführungsumgebung vorliegende Systemschriftarten (Fonts).',
  featureDetections: [
    {
      apiObject: 'navigator.fonts',
      detection: 'fonts' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/local-font-access/' },
  ],
  icon: 'font_download',
  routerLink: 'local-font-access'
};

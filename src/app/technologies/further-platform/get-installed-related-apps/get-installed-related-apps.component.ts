import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-get-installed-related-apps',
  templateUrl: './get-installed-related-apps.component.html'
})
export class GetInstalledRelatedAppsComponent extends TechnologyComponent {
  technology: Technology = GET_INSTALLED_RELATED_APPS;
}

export const GET_INSTALLED_RELATED_APPS: Technology = {
  name: 'Get Installed Related Apps API',
  description: 'Ermöglicht es Webanwendungen, herauszufinden, ob eine verwandte Anwendung (unabhängig des Anwendungstyps, wie PWA oder eine Native App) in der vorliegenden Ausführungsumgebung bereits installiert ist.',
  featureDetections: [
    {
      apiObject: 'navigator.getInstalledRelatedApps()',
      detection: 'getInstalledRelatedApps' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/get-installed-related-apps/spec/' },
  ],
  icon: 'apps_outage',
  routerLink: 'get-installed-related-apps'
};

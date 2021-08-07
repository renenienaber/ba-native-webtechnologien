import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-network-information',
  templateUrl: './network-information.component.html',
})
export class NetworkInformationComponent extends TechnologyComponent {
  technology: Technology = NETWORK_INFORMATION;
}

export const NETWORK_INFORMATION: Technology = {
  name: 'Network Information API',
  description: '.',
  featureDetections: [
    {
      apiObject: 'navigator.connection',
      detection: 'connection' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/netinfo/' },
  ],
  icon: 'network_check',
  routerLink: 'network-information'
};

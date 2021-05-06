import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html'
})
export class ServiceWorkerComponent extends TechnologyComponent {
  technology: Technology = SERVICE_WORKER;
  featureDetections: FeatureDetection[] = [];
}

export const SERVICE_WORKER: Technology = {
  name: 'Service Worker',
  description: 'Ermöglicht die Verwendung von Offlinefunktionalitäten.',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/service-workers/' },
    { name: 'CanIUse', link: 'https://caniuse.com/serviceworkers' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API' },
  ],
  icon: 'cloud_off',
  routerLink: 'service-worker'
};

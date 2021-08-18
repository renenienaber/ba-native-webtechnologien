import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html'
})
export class ServiceWorkerComponent extends TechnologyComponent {
  technology: Technology = SERVICE_WORKER;
}

export const SERVICE_WORKER: Technology = {
  name: 'Service Worker',
  description: 'Ermöglicht Hintergrundprozesse für Webanwendungen, die auch offline durchgeführt werden können. Dadurch ist es möglich, Inhalte in einem eigenen Cache zwischenzuspeichern, sodass verschiedene Caching-Strategien angewendet werden können und die Anwendung auch unabhängig von der Internetverbindung gestartet und ausgeführt werden kann.',
  featureDetections: [
    {
      apiObject: 'navigator.serviceWorker',
      detection: 'serviceWorker' in navigator
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/service-workers-1/' }
  ],
  icon: 'cloud_off',
  routerLink: 'service-worker'
};

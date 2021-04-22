import { Component } from '@angular/core';
import {Technology} from '../technology';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html',
  styleUrls: ['./service-worker.component.css']
})
export class ServiceWorkerComponent {}

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

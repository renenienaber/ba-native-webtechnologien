import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html'
})
export class ServiceWorkerComponent extends TechnologyComponent {
  technology: Technology = SERVICE_WORKER;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'navigator.serviceWorker',
      detection: 'serviceWorker' in navigator
    }
  ];
}

export const SERVICE_WORKER: Technology = {
  name: 'Service Worker',
  icon: 'cloud_off',
  routerLink: 'service-worker'
};

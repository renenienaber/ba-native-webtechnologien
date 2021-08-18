import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {SERVICE_WORKER} from '../../technologies';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html'
})
export class ServiceWorkerComponent extends TechnologyComponent {
  technology: Technology = SERVICE_WORKER;
}

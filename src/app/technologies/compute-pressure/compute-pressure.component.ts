import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-compute-pressure',
  templateUrl: './compute-pressure.component.html'
})
export class ComputePressureComponent extends TechnologyComponent {
  technology: Technology = COMPUTE_PRESSURE;
}

export const COMPUTE_PRESSURE: Technology = {
  name: 'Compute Pressure API',
  description: 'Ermöglicht es Webanwendungen, Informationen über die CPU-Nutzung des Gerätes zu erlangen.',
  featureDetections: [
    {
      apiObject: 'window.ComputePressureObserver',
      detection: 'ComputePressureObserver' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://oyiptong.github.io/compute-pressure/' },
  ],
  icon: 'running_with_errors',
  routerLink: 'compute-pressure'
};

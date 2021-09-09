import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-compute-pressure',
  templateUrl: './compute-pressure.component.html'
})
export class ComputePressureComponent extends TechnologyDemoComponent implements OnDestroy {
  private computePressureObserver: any;
  options: any = {
    cpuUtilizationThresholds: [0.5, 0.75, 0.9],
    cpuSpeedThresholds: [0.5]
  };
  results: ComputePressureData;

  ngOnDestroy() {
    if (this.computePressureObserver) {
      // @ts-ignore
      this.computePressureObserver.unobserve();
    }
  }

  initAndObserve(): void {
    if ('ComputePressureObserver' in window) {
      // @ts-ignore
      this.computePressureObserver = new ComputePressureObserver(this.callback, this.options);
      this.computePressureObserver.observe();
    } else {
      this.showNoSupportError('window.ComputePressureObserver');
    }
  }

  private callback(update: any) {
    this.results = {
      cpuSpeed: update.cpuSpeed,
      cpuUtilization: update.cpuUtilization
    };
  }
}

interface ComputePressureData {
  cpuSpeed?: number;
  cpuUtilization?: number;
}

import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
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

  constructor(private cdRef: ChangeDetectorRef) {
    super();
  }

  ngOnDestroy() {
    if (this.computePressureObserver) {
      if ('unobserve' in this.computePressureObserver) {
        this.computePressureObserver.unobserve();
      } else {
        this.computePressureObserver.stop();
      }
    }
  }

  initAndObserve(): void {
    if ('ComputePressureObserver' in window) {
      // @ts-ignore
      this.computePressureObserver = new ComputePressureObserver(update => this.callback(update), this.options);
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
    this.cdRef.detectChanges();
  }
}

interface ComputePressureData {
  cpuSpeed?: number;
  cpuUtilization?: number;
}

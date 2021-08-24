import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-gyroscope',
  templateUrl: './gyroscope.component.html'
})
export class GyroscopeComponent extends TechnologyDemoComponent {
  private sensor: any;
  results: GyroscopeData;

  initAndStartSensor(): void {
    if ('Gyroscope' in window) {
      // @ts-ignore
      this.sensor = new Gyroscope({frequency: 60});
      this.sensor.addEventListener('reading', () => {
          this.results = {x: this.sensor.x, y: this.sensor.y, z: this.sensor.z};
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.Gyroscope');
    }
  }
}

interface GyroscopeData {
  x?: number;
  y?: number;
  z?: number;
}

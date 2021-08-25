import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-ambient-light-sensor',
  templateUrl: './ambient-light-sensor.component.html'
})
export class AmbientLightSensorComponent extends TechnologyDemoComponent {
  private sensor: any;
  result: number;

  initAndStartSensor(): void {
    if ('AmbientLightSensor' in window) {
      // @ts-ignore
      this.sensor = new AmbientLightSensor({frequency: 10});
      this.sensor.addEventListener('reading', () => {
          this.result = this.sensor.illuminance;
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.AmbientLightSensor');
    }
  }
}

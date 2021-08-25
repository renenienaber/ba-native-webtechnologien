import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-proximity-sensor',
  templateUrl: './proximity-sensor.component.html',
  styles: [
  ]
})
export class ProximitySensorComponent extends TechnologyDemoComponent {
  private sensor: any;
  results: ProximityData;

  initAndStartSensor(): void {
    if ('ProximitySensor' in window) {
      // @ts-ignore
      this.sensor = new ProximitySensor({frequency: 60});
      this.sensor.addEventListener('reading', () => {
          this.results = {
            distance: this.sensor.distance,
            max: this.sensor.max,
            near: this.sensor.near};
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.ProximitySensor');
    }
  }
}

interface ProximityData {
  distance?: number;
  max?: number;
  near?: boolean;
}

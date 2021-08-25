import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-geolocation-sensor',
  templateUrl: './geolocation-sensor.component.html'
})
export class GeolocationSensorComponent extends TechnologyDemoComponent {
  private sensor: any;
  results: GeolocationData;

  initAndStartSensor(): void {
    if ('GeolocationSensor' in window) {
      // @ts-ignore
      this.sensor = new GeolocationSensor({frequency: 60});
      this.sensor.addEventListener('reading', () => {
          this.results = {
            latitude: this.sensor.latitude,
            longitude: this.sensor.longitude,
            altitude: this.sensor.altitude,
            accuracy: this.sensor.accuracy,
            altitudeAccuracy: this.sensor.altitudeAccuracy,
            heading: this.sensor.heading,
            speed: this.sensor.speed,
          };
        }
      );
      this.sensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.sensor.start();
    } else {
      this.showNoSupportError('window.GeolocationSensor');
    }
  }
}

interface GeolocationData {
  latitude?: number;
  longitude?: number;
  altitude?: number;
  accuracy?: number;
  altitudeAccuracy?: number;
  heading?: number;
  speed?: number;
}

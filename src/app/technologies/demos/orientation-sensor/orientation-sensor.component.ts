import {Component} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html'
})
export class OrientationSensorComponent extends TechnologyDemoComponent {
  absoluteSensor: any;
  relativeSensor: any;
  absoluteMat4 = new Float32Array(16);
  relativeMat4 = new Float32Array(16);

  initAndStartSensor(sensorType: 'absolute' | 'relative'): void {
    if ('absolute') {
      if (!('AbsoluteOrientationSensor' in window)) {
        this.showNoSupportError('window.AbsoluteOrientationSensor');
        return;
      }
    } else if ('relative') {
      if (!('RelativeOrientationSensor' in window)) {
        this.showNoSupportError('window.RelativeOrientationSensor');
        return;
      }
    }
    // @ts-ignore
    const sensor = sensorType === 'absolute' ? new AbsoluteOrientationSensor({frequency: 60}) : new RelativeOrientationSensor({frequency: 60});
    const mat4 = sensorType === 'absolute' ? this.absoluteMat4 : this.relativeMat4;
    sensor.addEventListener('reading', () => sensor.populateMatrix(mat4));
    sensor.addEventListener('error', sensorErrorEvent =>
      this.showError(sensorErrorEvent.error.message)
    );
    if ('absolute') {
      this.absoluteSensor = sensor;
      this.absoluteSensor.start();
    } else {
      this.relativeSensor = sensor;
      this.relativeSensor.start();
    }
  }
}

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
    if ('absolute' && !('AbsoluteOrientationSensor' in window)) {
      this.showNoSupportError('window.AbsoluteOrientationSensor');
      return;
    } else if ('relative' && !('RelativeOrientationSensor' in window)) {
      this.showNoSupportError('window.RelativeOrientationSensor');
      return;
    }

    const sensor =
      // @ts-ignore
      sensorType === 'absolute' ? new AbsoluteOrientationSensor({frequency: 60}) : new RelativeOrientationSensor({frequency: 60});
    const mat4 = sensorType === 'absolute' ? this.absoluteMat4 : this.relativeMat4;
    sensor.addEventListener('reading', () => sensor.populateMatrix(mat4));
    sensor.addEventListener('error', sensorErrorEvent =>
      this.showError(sensorErrorEvent.error.message)
    );
    if (sensorType === 'absolute') {
      this.absoluteSensor = sensor;
    } else {
      this.relativeSensor = sensor;
    }
    sensor.start();
  }
}

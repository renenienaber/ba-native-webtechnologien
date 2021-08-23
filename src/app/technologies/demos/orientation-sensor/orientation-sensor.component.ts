import {Component} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html'
})
export class OrientationSensorComponent extends TechnologyDemoComponent {
  absoluteSensor: any;
  private relativeSensor: any;
  absoluteMat4 = new Float32Array(16);
  private relativeMat4 = new Float32Array(16);

  absoluteResponse;
  relativeResponse;

  initAbsolute(): void {
    if ('AbsoluteOrientationSensor' in window) {
      // @ts-ignore
      this.absoluteSensor = new AbsoluteOrientationSensor({frequency: 60});
      // this.absoluteSensor.addEventListener('reading', () => {
      //   this.absoluteSensor.populateMatrix(this.absoluteMat4);
      //   this.absoluteResponse = this.absoluteMat4.map(val => (Math.round(val * 100) / 100)).toString();
      // });
      // this.absoluteSensor.addEventListener('error', sensorErrorEvent =>
      //   this.showError(sensorErrorEvent.error.message)
      // );
      this.initSensor('absolute');
      this.absoluteSensor.start();
    } else {
      this.showNoSupportError('window.AbsoluteOrientationSensor');
    }
  }
  initRelative(): void {
    if ('RelativeOrientationSensor' in window) {
      // @ts-ignore
      this.relativeSensor = new RelativeOrientationSensor({frequency: 60});
      this.relativeSensor.addEventListener('reading', () => {
        this.relativeSensor.populateMatrix(this.relativeMat4);
        this.relativeResponse = this.relativeMat4.map(val => (Math.round(val * 100) / 100)).toString();
      });
      this.relativeSensor.addEventListener('error', sensorErrorEvent =>
        this.showError(sensorErrorEvent.error.message)
      );
      this.relativeSensor.start();
    } else {
      this.showNoSupportError('window.RelativeOrientationSensor');
    }
  }

  initSensor(sensorType: 'absolute' | 'relative'): void {
    const sensor = sensorType === 'absolute' ? this.absoluteSensor : this.relativeSensor;
    const mat4 = sensorType === 'absolute' ? this.absoluteMat4 : this.relativeMat4;
    let response = sensorType === 'absolute' ? this.absoluteResponse : this.relativeResponse;
    sensor.addEventListener('reading', () => {
      sensor.populateMatrix(mat4);
      response = mat4.map(val => (Math.round(val * 100) / 100)).toString();
    });
    sensor.addEventListener('error', sensorErrorEvent =>
      this.showError(sensorErrorEvent.error.message)
    );
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-orientation-sensor',
  templateUrl: './orientation-sensor.component.html',
  styleUrls: ['./orientation-sensor.component.css']
})
export class OrientationSensorComponent extends TechnologyComponent implements OnInit, OnDestroy {
  technology: Technology = ORIENTATION_SENSOR_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.AbsoluteOrientationSensor',
      detection: 'AbsoluteOrientationSensor' in window
    },
    {
      apiObject: 'window.RelativeOrientationSensor',
      detection: 'RelativeOrientationSensor' in window
    }
  ];

  private errorNoAbsoluteOrientationSensor = 'window.AbsoluteOrientationSensor wird nicht unterstützt!';
  private errorNoRelativeOrientationSensor = 'window.RelativeOrientationSensor wird nicht unterstützt!';

  // @ts-ignore
  sensor: any;
  mat4: Float32Array;

  ngOnInit() {
    if ('AbsoluteOrientationSensor' in window) {
      // @ts-ignore
      this.sensor = new AbsoluteOrientationSensor({ frequency: 60 });
      this.mat4 = new Float32Array(16);
      this.sensor.start();
      this.sensor.onerror = event => {
        console.log(`${event.error.message}`);
        this.sensor.stop();
      };
      this.sensor.onreading = () => {
        this.sensor.populateMatrix(this.mat4);
        document.getElementById('matrix').innerHTML = this.mat4.toString();
      };
    } else {
      this.showError(this.errorNoAbsoluteOrientationSensor);
    }
  }

  ngOnDestroy() {
    //
  }

  draw(timestamp: any): void {
    window.requestAnimationFrame(this.draw);
    try {
      this.sensor.populateMatrix(this.mat4);
    } catch (e) {
      // mat4 has not been updated.
    }
    // Drawing...
    document.getElementById('matrix').innerHTML = this.mat4.toString();
    console.log("TRIGGERED");
    // document.getElementById('cube').style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg) rotateZ(${alpha}deg)`;
  }

}

export const ORIENTATION_SENSOR_API: Technology = {
  name: 'Orientation Sensor API',
  description: '',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-sensor/'},
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
    { name: 'CanIUse', link: 'https://caniuse.com/orientation-sensor' },
    { name: 'Mozilla Developer Network (Sensor APIs)', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs' },
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor-api'
};

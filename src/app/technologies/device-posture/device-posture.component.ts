import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-device-posture',
  templateUrl: './device-posture.component.html',
  styles: [
  ]
})
export class DevicePostureComponent extends TechnologyComponent {
  technology: Technology = DEVICE_POSTURE;
}

export const DEVICE_POSTURE: Technology = {
  name: 'Device Posture API',
  description: 'Ermöglicht es, die Ausrichtung des Endgerätes zu erkennen. Die API nimmt dabei insbesondere auf Geräte mit einem faltbaren Bildschirm oder zwei Bildschirmen, zwischen denen das Gerät gefaltet werden kann, Bezug.',
  featureDetections: [
    {
      apiObject: 'navigator.devicePosture',
      detection: 'devicePosture' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/device-posture/' },
  ],
  icon: 'splitscreen',
  routerLink: 'device-posture'
};

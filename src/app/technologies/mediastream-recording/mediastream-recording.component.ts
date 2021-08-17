import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-mediastream-recording',
  templateUrl: './mediastream-recording.component.html'
})
export class MediastreamRecordingComponent extends TechnologyComponent {
  technology: Technology = MEDIASTREAM_RECORDING;
}

export const MEDIASTREAM_RECORDING: Technology = {
  name: 'MediaStream Recording',
  description: 'Definiert die MediaRecorder API zur Umsetzung von Aufnahmen unter der Verwendung von MediaStream-Objekten.',
  featureDetections: [
    {
      apiObject: 'window.MediaRecorder',
      detection: 'MediaRecorder' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediastream-recording/' },
  ],
  icon: 'radio_button_checked',
  routerLink: 'mediastream-recording'
};

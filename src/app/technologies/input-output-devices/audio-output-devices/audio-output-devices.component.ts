import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';
import {isObjectInHtmlElement} from '../../functions';

@Component({
  selector: 'app-audio-output-devices',
  templateUrl: './audio-output-devices.component.html'
})
export class AudioOutputDevicesComponent extends TechnologyComponent {
  technology: Technology = AUDIO_OUTPUT_DEVICES;
}

export const AUDIO_OUTPUT_DEVICES: Technology = {
  name: 'Audio Output Devices API',
  description: 'Ermöglicht die Auswahl eines expliziten Audioausgabegerätes.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.sinkId',
      detection: isObjectInHtmlElement('audio', 'sinkId'),
    },
    {
      apiObject: 'MediaDevices.selectAudioOutput',
      detection: 'MediaDevices' in window && 'selectAudioOutput' in MediaDevices
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/audio-output/' },
  ],
  icon: 'speaker',
  routerLink: 'audio-output-devices'
};

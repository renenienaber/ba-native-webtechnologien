import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {AUDIO_OUTPUT_DEVICES} from '../technologies';

@Component({
  selector: 'app-audio-output-devices',
  templateUrl: './audio-output-devices.component.html'
})
export class AudioOutputDevicesComponent extends TechnologyComponent {
  technology: Technology = AUDIO_OUTPUT_DEVICES;
}

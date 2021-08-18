import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_MIDI} from '../../technologies';

@Component({
  selector: 'app-web-midi',
  templateUrl: './web-midi.component.html'
})
export class WebMidiComponent extends TechnologyComponent {
  technology: Technology = WEB_MIDI;
}

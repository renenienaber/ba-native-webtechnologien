import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-web-midi',
  templateUrl: './web-midi.component.html'
})
export class WebMidiComponent extends TechnologyComponent {
  technology: Technology = WEB_MIDI;
}

export const WEB_MIDI: Technology = {
  name: 'Web MIDI API',
  description: 'Ermöglicht Webanwendungen den Zugriff auf am Endgerät angeschlossene Geräte mit verbautem Musical Instrument Digital Interface (MIDI).',
  featureDetections: [
    {
      apiObject: 'navigator.requestMIDIAccess()',
      detection: 'requestMIDIAccess' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webmidi/' },
  ],
  icon: 'piano',
  routerLink: 'web-midi'
};

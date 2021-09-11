import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-midi',
  templateUrl: './web-midi.component.html'
})
export class WebMidiComponent extends TechnologyDemoComponent {
  result: any;

  requestMIDIAccess(): void {
    if ('requestMIDIAccess' in navigator) {
      // @ts-ignore
      navigator.requestMIDIAccess()
        .then(res => this.result = {
          inputs: mapMIDIPorts(res.inputs),
          outputs: mapMIDIPorts(res.outputs),
          sysexEnabled: res.sysexEnabled,
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.requestMIDIAccess');
    }
  }
}

function mapMIDIPorts(midiPorts: any): any[] {
  const ports = [];
  for (const entry of midiPorts) {
    const port = entry[1];
    ports.push({
      id: port.id,
      manufacturer: port.manufacturer,
      name: port.name,
      connection: port.connection
    });
  }
  return ports;
}

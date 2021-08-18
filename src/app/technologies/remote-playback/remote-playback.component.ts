import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {isObjectInHtmlElement} from '../functions';

@Component({
  selector: 'app-remote-playback',
  templateUrl: './remote-playback.component.html',
})
export class RemotePlaybackComponent extends TechnologyComponent {
  technology: Technology = REMOTE_PLAYBACK;
}

export const REMOTE_PLAYBACK: Technology = {
  name: 'Remote Playback API',
  description: 'Erlaubt die Fernwiedergabe von Medieninhalten einer Webseite.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.remote',
      detection: isObjectInHtmlElement('audio', 'remote'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/remote-playback/' },
  ],
  icon: 'cast',
  routerLink: 'remote-playback'
};

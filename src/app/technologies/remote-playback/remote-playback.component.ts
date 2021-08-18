import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {REMOTE_PLAYBACK} from '../technologies';

@Component({
  selector: 'app-remote-playback',
  templateUrl: './remote-playback.component.html',
})
export class RemotePlaybackComponent extends TechnologyComponent {
  technology: Technology = REMOTE_PLAYBACK;
}

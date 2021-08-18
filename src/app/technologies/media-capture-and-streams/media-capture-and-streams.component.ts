import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {MEDIA_CAPTURE_AND_STREAMS} from '../technologies';

@Component({
  selector: 'app-media-capture-and-streams',
  templateUrl: './media-capture-and-streams.component.html'
})
export class MediaCaptureAndStreamsComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPTURE_AND_STREAMS;
}

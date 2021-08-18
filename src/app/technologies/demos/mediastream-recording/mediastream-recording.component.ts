import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {MEDIASTREAM_RECORDING} from '../../technologies';

@Component({
  selector: 'app-mediastream-recording',
  templateUrl: './mediastream-recording.component.html'
})
export class MediastreamRecordingComponent extends TechnologyComponent {
  technology: Technology = MEDIASTREAM_RECORDING;
}


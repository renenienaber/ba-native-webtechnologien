import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {MEDIASTREAM_IMAGE_CAPTURE} from '../../technologies';

@Component({
  selector: 'app-mediastream-image-capture',
  templateUrl: './mediastream-image-capture.component.html',
})
export class MediastreamImageCaptureComponent extends TechnologyComponent {
  technology: Technology = MEDIASTREAM_IMAGE_CAPTURE;
}


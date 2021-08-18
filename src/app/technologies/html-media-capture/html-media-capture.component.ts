import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {HTML_MEDIA_CAPTURE} from '../technologies';

@Component({
  selector: 'app-html-media-capture',
  templateUrl: './html-media-capture.component.html'
})
export class HtmlMediaCaptureComponent extends TechnologyComponent {
  technology: Technology = HTML_MEDIA_CAPTURE;
}

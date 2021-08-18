import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {MEDIA_CAPTURE_FROM_DOM_ELEMENTS} from '../../technologies';

@Component({
  selector: 'app-media-capture-from-dom-elements',
  templateUrl: './media-capture-from-dom-elements.component.html'
})
export class MediaCaptureFromDomElementsComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPTURE_FROM_DOM_ELEMENTS;
}

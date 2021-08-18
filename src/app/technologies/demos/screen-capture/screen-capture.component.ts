import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {SCREEN_CAPTURE} from '../../technologies';

@Component({
  selector: 'app-screen-capture',
  templateUrl: './screen-capture.component.html'
})
export class ScreenCaptureComponent extends TechnologyComponent {
  technology: Technology = SCREEN_CAPTURE;
}


import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {WEB_SPEECH} from '../technologies';

@Component({
  selector: 'app-web-speech',
  templateUrl: './web-speech.component.html'
})
export class WebSpeechComponent extends TechnologyComponent {
  technology: Technology = WEB_SPEECH;
}

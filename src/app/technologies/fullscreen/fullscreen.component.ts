import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {FULLSCREEN} from '../technologies';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html'
})
export class FullscreenComponent extends TechnologyComponent {
  technology: Technology = FULLSCREEN;
}

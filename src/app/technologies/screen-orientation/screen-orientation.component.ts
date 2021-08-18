import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {SCREEN_ORIENTATION} from '../technologies';

@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.component.html'
})
export class ScreenOrientationComponent extends TechnologyComponent {
  technology: Technology = SCREEN_ORIENTATION;
}

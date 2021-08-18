import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {TOUCH_EVENTS} from '../technologies';

@Component({
  selector: 'app-touch-events',
  templateUrl: './touch-events.component.html'
})
export class TouchEventsComponent extends TechnologyComponent {
  technology: Technology = TOUCH_EVENTS;
}

import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {POINTER_EVENTS} from '../technologies';

@Component({
  selector: 'app-pointer-events',
  templateUrl: './pointer-events.component.html',
  styles: [
  ]
})
export class PointerEventsComponent extends TechnologyComponent {
  technology = POINTER_EVENTS;
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-pointer-events',
  templateUrl: './pointer-events.component.html',
  styles: [
  ]
})
export class PointerEventsComponent extends TechnologyDemoComponent {
  pointerEvent: PointerEvent;

  getPointerEventInfos(event: PointerEvent): void {
    if ('PointerEvent' in window) {
      this.pointerEvent = event;
    } else {
      this.showNoSupportError('window.PointerEvent');
    }
  }
}

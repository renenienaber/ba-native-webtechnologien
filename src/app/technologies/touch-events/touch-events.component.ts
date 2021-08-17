import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-touch-events',
  templateUrl: './touch-events.component.html'
})
export class TouchEventsComponent extends TechnologyComponent {
  technology: Technology = TOUCH_EVENTS;
}

export const TOUCH_EVENTS: Technology = {
  name: 'Touch Events',
  description: 'Werden durch Berührungen auf einer berührungsempfindlichen Oberfläche (beispielsweise einem Touchscreen) ausgelöst.',
  featureDetections: [
    {
      apiObject: 'window.TouchEvent',
      detection: 'TouchEvent' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/touch-events/' },
  ],
  icon: 'touch_app',
  routerLink: 'touch-events'
};

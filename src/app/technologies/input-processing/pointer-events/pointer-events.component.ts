import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-pointer-events',
  templateUrl: './pointer-events.component.html',
  styles: [
  ]
})
export class PointerEventsComponent extends TechnologyComponent {
  technology = POINTER_EVENTS;
}

export const POINTER_EVENTS: Technology = {
  name: 'Pointer Events',
  description: 'Definiert zahlreiche Events und Schnittstellen für die Verarbeitung von Zeigereingaben durch Geräte wie Computermäuse, Stifte oder Touchscreens.',
  featureDetections: [
    {
      apiObject: 'window.PointerEvent',
      detection: 'PointerEvent' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/pointerevents2/' },
  ],
  icon: 'mouse',
  routerLink: 'pointer-events'
};

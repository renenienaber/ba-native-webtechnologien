import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-virtualkeyboard',
  templateUrl: './virtualkeyboard.component.html',
})
export class VirtualkeyboardComponent extends TechnologyComponent {
  technology: Technology = VIRTUALKEYBOARD;
}

export const VIRTUALKEYBOARD: Technology = {
  name: 'VirtualKeyboard API',
  description: 'Ermöglicht eine bessere Kontrolle über die Sichtbarkeit der virtuellen Tastatur sowie der Anpassung des Layouts von Webseiten nach dessen Änderung.',
  featureDetections: [
    {
      apiObject: 'navigator.virtualKeyboard',
      detection: 'virtualKeyboard' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/editing/docs/virtualkeyboard/' },
  ],
  icon: 'keyboard_alt',
  routerLink: 'virtualkeyboard'
};

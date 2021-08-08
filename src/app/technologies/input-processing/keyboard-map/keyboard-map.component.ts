import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-keyboard-map',
  templateUrl: './keyboard-map.component.html'
})
export class KeyboardMapComponent extends TechnologyComponent {
  technology: Technology = KEYBOARD_MAP;
}

export const KEYBOARD_MAP: Technology = {
  name: 'Keyboard Map',
  description: 'Diese API gibt die hinter den physischen Tasten hinterlegten Werte auf Basis des aktuell ausgewählten Tastaturlayouts aus.',
  featureDetections: [
    {
      apiObject: 'navigator.keyboard',
      detection: 'keyboard' in navigator
    },
    {
      apiObject: 'navigator.keyboard.getLayoutMap()',
      detection: 'keyboard' in navigator && 'getLayoutMap' in navigator.keyboard
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/keyboard-map/' },
  ],
  icon: 'keyboard',
  routerLink: 'keyboard-map'
};

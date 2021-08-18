import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-keyboard-map',
  templateUrl: './keyboard-map.component.html'
})
export class KeyboardMapComponent extends TechnologyComponent {
  technology: Technology = KEYBOARD_MAP;
}

export const KEYBOARD_MAP: Technology = {
  name: 'Keyboard Map',
  description: 'Eine API, um basierend auf das im Betriebssystem eingestellte Tastaturlayout die hinter den \"codes\" (physische Tasten) liegenden \"keys\" (durch Ausführungsumgebung interpretierter Wert) zurückzugeben.',
  featureDetections: [
    {
      apiObject: 'navigator.keyboard',
      detection: 'keyboard' in navigator
    },
    {
      apiObject: 'navigator.keyboard.getLayoutMap()',
      detection: 'keyboard' in navigator && 'getLayoutMap' in (navigator as any).keyboard
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/keyboard-map/' },
  ],
  icon: 'keyboard',
  routerLink: 'keyboard-map'
};

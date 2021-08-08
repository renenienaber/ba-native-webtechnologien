import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-keyboard-lock',
  templateUrl: './keyboard-lock.component.html'
})
export class KeyboardLockComponent extends TechnologyComponent {
  technology: Technology = KEYBOARD_LOCK;
}

export const KEYBOARD_LOCK: Technology = {
  name: 'Keyboard Lock',
  description: 'Ermöglicht einer Webseite, auch diejenigen Tasten zu erfassen, welche normalerweise vom zugrundeliegenden Betriebssystem reserviert sind.',
  featureDetections: [
    {
      apiObject: 'navigator.keyboard',
      detection: 'keyboard' in navigator
    },
    {
      apiObject: 'navigator.keyboard.lock()',
      detection: 'keyboard' in navigator && 'lock' in navigator.keyboard
    },
    {
      apiObject: 'navigator.keyboard.unlock()',
      detection: 'keyboard' in navigator && 'unlock' in navigator.keyboard
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/keyboard-lock/' },
  ],
  icon: 'keyboard_hide',
  routerLink: 'keyboard-lock'
};

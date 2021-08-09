import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
})
export class GamepadComponent extends TechnologyComponent {
  technology: Technology = GAMEPAD;
}

export const GAMEPAD: Technology = {
  name: 'Gamepad',
  description: 'Ermöglicht den Zugriff auf Signale von Gamepads.',
  featureDetections: [
    {
      apiObject: 'navigator.getGamepads()',
      detection: 'getGamepads' in navigator,
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/gamepad/' },
  ],
  icon: 'sports_esports',
  routerLink: 'gamepad'
};

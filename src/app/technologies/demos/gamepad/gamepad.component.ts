import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {GAMEPAD} from '../../technologies';

@Component({
  selector: 'app-gamepad',
  templateUrl: './gamepad.component.html',
})
export class GamepadComponent extends TechnologyComponent {
  technology: Technology = GAMEPAD;
}

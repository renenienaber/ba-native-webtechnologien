import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {KEYBOARD_LOCK} from '../../technologies';

@Component({
  selector: 'app-keyboard-lock',
  templateUrl: './keyboard-lock.component.html'
})
export class KeyboardLockComponent extends TechnologyComponent {
  technology: Technology = KEYBOARD_LOCK;
}


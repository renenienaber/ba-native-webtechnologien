import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {KEYBOARD_MAP} from '../../technologies';

@Component({
  selector: 'app-keyboard-map',
  templateUrl: './keyboard-map.component.html'
})
export class KeyboardMapComponent extends TechnologyComponent {
  technology: Technology = KEYBOARD_MAP;
}


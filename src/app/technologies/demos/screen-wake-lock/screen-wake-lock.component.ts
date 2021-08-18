import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {SCREEN_WAKE_LOCK} from '../../technologies';

@Component({
  selector: 'app-screen-wake-lock',
  templateUrl: './screen-wake-lock.component.html',
  styles: [
  ]
})
export class ScreenWakeLockComponent extends TechnologyComponent {
  technology: Technology = SCREEN_WAKE_LOCK;
}

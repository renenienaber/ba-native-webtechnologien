import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {MULTI_SCREEN_WINDOW_PLACEMENT} from '../technologies';

@Component({
  selector: 'app-multi-screen-window-placement',
  templateUrl: './multi-screen-window-placement.component.html'
})
export class MultiScreenWindowPlacementComponent extends TechnologyComponent {
  technology: Technology = MULTI_SCREEN_WINDOW_PLACEMENT;
}

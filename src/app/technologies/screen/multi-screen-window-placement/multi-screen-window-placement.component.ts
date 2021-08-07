import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-multi-screen-window-placement',
  templateUrl: './multi-screen-window-placement.component.html'
})
export class MultiScreenWindowPlacementComponent extends TechnologyComponent {
  technology: Technology = MULTI_SCREEN_WINDOW_PLACEMENT;
}

export const MULTI_SCREEN_WINDOW_PLACEMENT: Technology = {
  name: 'Multi-Screen Window Placement',
  description: 'Definiert APIs, mit denen über angeschlossene Bildschirme abgefragt und Fenster relativ zu diesen positioniert werden können.',
  featureDetections: [
    {
      apiObject: 'window.getScreens()',
      detection: 'getScreens' in window
    },
    {
      apiObject: 'window.screen.isExtended',
      detection: 'isExtended' in window.screen
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://webscreens.github.io/window-placement/' },
  ],
  icon: 'window',
  routerLink: 'multi-screen-window-placement'
};

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-multi-screen-window-placement',
  templateUrl: './multi-screen-window-placement.component.html'
})
export class MultiScreenWindowPlacementComponent extends TechnologyDemoComponent {
  screensInfo: ScreenData;

  getScreens(): void {
    if ('getScreens' in window) {
      // @ts-ignore
      window.getScreens()
        .then(res => {
          console.log(res);
          this.screensInfo = {
            currentScreen: getDtoInformation(res.currentScreen),
            screens: [...res.screens.map(e => getDtoInformation(e))]
          };
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.getScreens()');
    }
  }
}

interface ScreenData {
  readonly currentScreen: ScreenAdvancedDto;
  readonly screens: ScreenAdvancedDto[];
}

interface ScreenAdvancedDto {
  readonly availWidth: number;
  readonly availHeight: number;
  readonly width: number;
  readonly height: number;
  readonly left: number;
  readonly top: number;
  readonly isPrimary: boolean;
  readonly isInternal: boolean;
}

function getDtoInformation(screenAdvanced: any): ScreenAdvancedDto {
  return {
    availWidth: screenAdvanced.availWidth,
    availHeight: screenAdvanced.availHeight,
    width: screenAdvanced.width,
    height: screenAdvanced.height,
    left: screenAdvanced.left,
    top: screenAdvanced.top,
    isPrimary: screenAdvanced.isPrimary,
    isInternal: screenAdvanced.isInternal
  };
}

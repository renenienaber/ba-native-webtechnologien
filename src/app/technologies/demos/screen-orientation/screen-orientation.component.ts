import {Component, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.component.html',
  styleUrls: ['./screen-orientation.component.css']
})
export class ScreenOrientationComponent extends TechnologyDemoComponent implements OnInit {
  isSupported = ('screen' in window) && ('orientation' in window.screen);
  errorNoSupport = 'window.screen.orientation wird nicht unterstützt';

  orientationType: OrientationType;
  orientationAngle: number;

  possibleOrientationLockTypes = [
    'any',
    'natural',
    'landscape',
    'portrait',
    'portrait-primary',
    'portrait-secondary',
    'landscape-primary',
    'landscape-secondary'
  ];


  ngOnInit(): void {
    if (this.isSupported) {
      this.updateOrientationData();
      window.screen.orientation.addEventListener('change', () => {
        this.updateOrientationData();
      });
    }
  }

  private updateOrientationData(): void {
    this.orientationType = window.screen.orientation.type;
    this.orientationAngle = window.screen.orientation.angle;
  }

  onOrientationLockChange(orientationLockType: string): void {
    if (this.isSupported) {
      window.screen.orientation.lock(orientationLockType as OrientationLockType)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.screen.orientation');
    }
  }

  activateFullscreen(): void {
    if ('requestFullscreen' in document.documentElement) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
          .catch(err => this.showError(err));
      } else {
        this.showError('Vollbildmodus ist bereits aktiviert.');
      }
    } else {
      this.showNoSupportError('Element.requestFullscreen()');
    }
  }
}

import {Component} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html'
})
export class GeolocationComponent extends TechnologyDemoComponent {
  currentPos: Position;
  watchId: number;

  options: PositionOptions = {
    enableHighAccuracy: false,
    timeout: 5000,
  };

  getCurrentPosition(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => this.onSuccess(pos),
        err => this.onError(err),
        this.options
      );
    } else {
      this.showNoSupportError('navigator.geolocation');
    }
  }

  watchPosition(): void {
    if ('geolocation' in navigator) {
      this.watchId = navigator.geolocation.watchPosition(
        pos => this.onSuccess(pos),
        err => this.onError(err),
        this.options
      );
    } else {
      this.showNoSupportError('navigator.geolocation');
    }
  }

  clearWatch(): void {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = undefined;
    }
  }

  private onSuccess(position: Position) {
    this.currentPos = position;
  }

  private onError(positionError: PositionError) {
    this.showError(positionError.message);
  }
}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-screen-capture',
  templateUrl: './screen-capture.component.html'
})
export class ScreenCaptureComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  videoElement: HTMLVideoElement;

  private isSupported(): boolean {
    if ('mediaDevices' in navigator && 'getDisplayMedia' in navigator.mediaDevices) {
      return true;
    }
    this.showNoSupportError('navigator.mediaDevices.getDisplayMedia()');
    return false;
  }

  getDisplayMedia(): void {
    if (this.isSupported()) {
      // @ts-ignore
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(stream => this.videoElement.srcObject = stream)
        .catch(err => this.showError(err));
    }
  }
}

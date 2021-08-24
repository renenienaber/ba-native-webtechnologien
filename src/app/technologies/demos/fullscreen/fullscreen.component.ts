import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html'
})
export class FullscreenComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  videoElement: HTMLVideoElement;

  activateFullscreen(element: 'video' | 'document'): void {
    const fullscreenElement = element === 'video' ? this.videoElement : document.documentElement;

    if ('requestFullscreen' in fullscreenElement) {
      if (!document.fullscreenElement) {
        fullscreenElement.requestFullscreen()
          .catch(err => this.showError(err));
      } else {
        this.showError('Vollbildmodus ist bereits aktiviert.');
      }
    } else {
      this.showNoSupportError('Element.requestFullscreen');
    }
  }
}

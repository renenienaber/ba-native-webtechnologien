import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  videoElement: HTMLVideoElement;

  activateFullscreen(): void {
    if ('requestFullscreen' in this.videoElement) {
      if (!document.fullscreenElement) {
        this.videoElement.requestFullscreen()
          .catch(err => this.showError(err));
      } else {
        this.showError('Vollbildmodus ist bereits für ein Element aktiviert.');
      }
    } else {
      this.showNoSupportError('Element.requestFullscreen');
    }
  }
}

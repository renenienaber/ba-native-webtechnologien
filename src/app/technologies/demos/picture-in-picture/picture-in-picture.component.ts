// @ts-nocheck
import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-picture-in-picture',
  templateUrl: './picture-in-picture.component.html'
})

export class PictureInPictureComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  videoElement: HTMLVideoElement;

  togglePicInPic(): void {
    if ('pictureInPictureEnabled' in document) {
      if (document.pictureInPictureEnabled || !this.videoElement.disablePictureInPicture) {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture().catch(err => this.showError(err));
        } else {
          this.videoElement.requestPictureInPicture().catch(err => this.showError(err));
        }
      } else {
        this.showError('Bild-in-Bild ist deaktiviert!');
      }
    } else {
      this.showNoSupportError('document.pictureInPictureEnabled');
    }
  }
}

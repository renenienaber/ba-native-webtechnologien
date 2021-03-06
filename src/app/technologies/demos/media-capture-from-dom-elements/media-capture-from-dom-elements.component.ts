import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-media-capture-from-dom-elements',
  templateUrl: './media-capture-from-dom-elements.component.html'
})
export class MediaCaptureFromDomElementsComponent extends TechnologyDemoComponent {
  @ViewChild('sourceVideoElement', { static: false })
  set sourceVideoRef(ref: ElementRef<HTMLVideoElement>) {
    this.sourceVideoElement = ref.nativeElement;
  }
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }

  errorNoSupport = 'HTMLVideoElement.captureStream() wird nicht unterstützt!';

  sourceVideoElement: HTMLVideoElement;
  videoElement: HTMLVideoElement;

  useInputVideoForOutputVideo(): void {
    if ('captureStream' in this.sourceVideoElement) {
      // @ts-ignore
      this.videoElement.srcObject = this.sourceVideoElement.captureStream();
    }
  }
}

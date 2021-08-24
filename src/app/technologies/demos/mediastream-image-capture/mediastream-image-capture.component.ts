import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-mediastream-image-capture',
  templateUrl: './mediastream-image-capture.component.html'
})
export class MediastreamImageCaptureComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  @ViewChild('canvasElement', { static: false })
  set canvasRef(ref: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = ref.nativeElement;
  }

  videoElement: HTMLVideoElement;
  canvasElement: HTMLCanvasElement;
  imageCapture;

  onGetUserVideo(): void {
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.videoElement.srcObject = stream;
          if ('ImageCapture' in window) {
            // @ts-ignore
            this.imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
          } else {
            this.showNoSupportError('window.ImageCapture');
          }
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.mediaDevices');
    }
  }

  onGrabFrameClick(): void {
    if (this.imageCapture) {
      this.imageCapture.grabFrame()
        .then(imageBitmap => this.drawCanvas(imageBitmap))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.ImageCapture');
    }
  }

  private drawCanvas(img: ImageBitmap) {
    this.canvasElement.width = getComputedStyle(this.canvasElement).width.split('px')[0] as unknown as number;
    this.canvasElement.height = getComputedStyle(this.canvasElement).height.split('px')[0] as unknown as number;
    const ratio  = Math.min(this.canvasElement.width / img.width, this.canvasElement.height / img.height);
    const x = (this.canvasElement.width - img.width * ratio) / 2;
    const y = (this.canvasElement.height - img.height * ratio) / 2;
    this.canvasElement.getContext('2d').clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.canvasElement.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
      x, y, img.width * ratio, img.height * ratio);
  }
}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-media-capture-and-streams',
  templateUrl: './media-capture-and-streams.component.html',
  styleUrls: ['./media-capture-and-streams.component.css']
})
export class MediaCaptureAndStreamsComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  @ViewChild('audioElement', { static: false })
  set audioRef(ref: ElementRef<HTMLAudioElement>) {
    this.audioElement = ref.nativeElement;
  }

  audioElement: HTMLAudioElement;
  videoElement: HTMLVideoElement;

  private isMediaDevicesSupported(): boolean {
    if ('mediaDevices' in navigator) {
      return true;
    }
    this.showNoSupportError('navigator.mediaDevices');
    return false;
  }

  onVideoCapture(): void {
    if (this.isMediaDevicesSupported()) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => this.videoElement.srcObject = stream)
        .catch(err => this.showError(err));
    }
  }

  onAudioCapture(): void {
    if (this.isMediaDevicesSupported()) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => this.audioElement.srcObject = stream)
        .catch(err => this.showError(err));
    }
  }
}

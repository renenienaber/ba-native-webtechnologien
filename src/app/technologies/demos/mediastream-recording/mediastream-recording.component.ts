import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-mediastream-recording',
  templateUrl: './mediastream-recording.component.html'
})
export class MediastreamRecordingComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set sourceVideoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  @ViewChild('recordedVideoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.recordedVideoElement = ref.nativeElement;
  }

  videoElement: HTMLVideoElement;
  recordedVideoElement: HTMLVideoElement;
  mediaRecorder;
  isRecording = false;
  recordedBlobs: any[] = [];

  getUserVideo(): void {
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          this.videoElement.srcObject = stream;
          if ('MediaRecorder' in window) {
            // @ts-ignore
             this.mediaRecorder = new MediaRecorder(stream);
          } else {
            this.showNoSupportError('window.MediaRecorder');
          }
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.mediaDevices');
    }
  }

  private onRecorderDataAvailable(event: any) {
    if (event.data && event.data.size > 0) {
      this.recordedBlobs.push(event.data);
      this.showRecordedVideo();
    }
  }

  private showRecordedVideo(): void {
    const blob = new Blob(this.recordedBlobs, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    this.recordedVideoElement.src = url;
  }

  startRecording(): void {
    if (this.mediaRecorder) {
      this.recordedBlobs = [];
      this.mediaRecorder.addEventListener('dataavailable', ev => this.onRecorderDataAvailable(ev));
      this.mediaRecorder.start();
      this.isRecording = true;
    } else {
      this.showNoSupportError('window.MediaRecorder');
    }
  }

  stopRecording(): void {
    this.isRecording = false;
    this.mediaRecorder.stop();
  }
}

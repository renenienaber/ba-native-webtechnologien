import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-remote-playback',
  templateUrl: './remote-playback.component.html',
  styles: [
  ]
})
export class RemotePlaybackComponent extends TechnologyDemoComponent {
  @ViewChild('videoElement', { static: false })
  set videoRef(ref: ElementRef<HTMLVideoElement>) {
    this.videoElement = ref.nativeElement;
  }
  videoElement: HTMLVideoElement;

  promptRemotePlayback(): void {
    if ('remote' in this.videoElement) {
      // @ts-ignore
      this.videoElement.remote.prompt()
        .then(() => this.showError('Remotegerät wurde ausgewählt.'))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('HTMLMediaElement.remote');
    }
  }

}

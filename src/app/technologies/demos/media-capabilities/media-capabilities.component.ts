import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-media-capabilities',
  templateUrl: './media-capabilities.component.html'
})
export class MediaCapabilitiesComponent extends TechnologyDemoComponent {
  private mediaConfig = {
    audio: {
      contentType: 'audio/webm; codecs=opus',
      channels: '2', // audio channels used by the track
      bitrate: 123456, // number of bits used to encode a second of audio
      samplerate: 48000 // number of samples of audio carried per second
    },
    video: {
      contentType: 'video/webm; codecs="vp09.00.10.08"',
      width: 1920,
      height: 1080,
      bitrate: 2646242, // number of bits used to encode a second of video
      framerate: '30' // number of frames used in one second
    }
  };

  mediaDecodingConfig = {
    type: 'media-source',
    ...this.mediaConfig
  };

  mediaEncodingConfig = {
    type: 'record',
    ...this.mediaConfig
  };

  decodingInfoResult: any;
  encodingInfoResult: any;

  private isSupported(): boolean {
    if ('mediaCapabilities' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.mediaCapabilities');
      return false;
    }
  }

  getDecodingInfo(): void {
    // @ts-ignore
    if (this.isSupported() && ('decodingInfo' in navigator.mediaCapabilities)) {
      // @ts-ignore
      navigator.mediaCapabilities.decodingInfo(this.mediaDecodingConfig)
        .then(res => this.decodingInfoResult = res)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.mediaCapabilities.decodingInfo()');
    }
  }

  getEncodingInfo(): void {
    // @ts-ignore
    if (this.isSupported() && ('encodingInfo' in navigator.mediaCapabilities)) {
      // @ts-ignore
      navigator.mediaCapabilities.encodingInfo(this.mediaEncodingConfig)
        .then(res => this.encodingInfoResult = res)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.mediaCapabilities.encodingInfo()');
    }
  }

}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-media-session-standard',
  templateUrl: './media-session-standard.component.html'
})
export class MediaSessionStandardComponent extends TechnologyDemoComponent {
  @ViewChild('audioElement', { static: false })
  set audioRef(ref: ElementRef<HTMLAudioElement>) {
    this.audioElement = ref.nativeElement;
  }
  audioElement: HTMLAudioElement;

  errorNoMediaSession = 'navigator.mediaSession wird nicht unterstützt!';

  title = 'Titel';
  artist = 'Künstler-Name';
  album = 'Album-Name';
  artwork = [{ src: './assets/icons/icon-128x128.png', sizes: '128x128', type: 'image/png' }];

  private defaultSkipTime = 5;

  isSupported(): boolean {
    return 'mediaSession' in navigator;
  }

  audioLoaded(): void {
    this.setAudioListeners();
    this.setSessionListeners();
    this.setMetadata();
    this.updatePositionState();
  }

  setMetadata(): void {
    // @ts-ignore
    navigator.mediaSession.metadata = new MediaMetadata({
      title: this.title,
      artist: this.artist,
      album: this.album,
      artwork: this.artwork
    });
  }

  private setSessionListeners(): void {
    const actionHandlers = [
      ['play', () => this.onSessionPlay()],
      ['pause', () => this.onSessionPause()],
      ['seekbackward', (ev) => this.onSessionSeekBackward(ev)],
      ['seekforward', (ev) => this.onSessionSeekForward(ev)],
      ['seekto', (ev) => this.onSessionSeekTo(ev)]
    ];

    const noSupportActions = [];
    for (const [action, handler] of actionHandlers) {
      try {
        // @ts-ignore
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (error) {
        noSupportActions.push(action);
      }
    }
    if (noSupportActions.length > 0) {
      this.showError(`Keine Unterstützung für die Media-Session-Aktionen ${noSupportActions.join(', ')}.`);
    }
  }

  private onSessionPlay(): void {
    this.audioElement.play()
      .catch(err => this.showError(err));
  }

  private onSessionPause(): void {
    this.audioElement.pause();
  }

  private onSessionSeekBackward(event: any): void {
    const skipTime = event.seekOffset || this.defaultSkipTime;
    this.audioElement.currentTime = Math.max(this.audioElement.currentTime - skipTime, 0);
    this.updatePositionState();
  }

  private onSessionSeekForward(event: any): void {
    const skipTime = event.seekOffset || this.defaultSkipTime;
    this.audioElement.currentTime = Math.min(this.audioElement.currentTime + skipTime, this.audioElement.duration);
    this.updatePositionState();
  }

  private onSessionSeekTo(event: any): void {
    if (event.fastSeek && ('fastSeek' in this.audioElement)) {
      // @ts-ignore
      this.audioElement.fastSeek(event.seekTime);
      return;
    }
    this.audioElement.currentTime = event.seekTime;
    this.updatePositionState();
  }

  private setAudioListeners(): void {
    this.audioElement.addEventListener('play', () => {
      this.updatePositionState();
      // @ts-ignore
      navigator.mediaSession.playbackState = 'playing';
    });
    this.audioElement.addEventListener('pause', () => {
      // @ts-ignore
      navigator.mediaSession.playbackState = 'paused';
    });
  }

  private updatePositionState() {
    // @ts-ignore
    if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
      // @ts-ignore
      navigator.mediaSession.setPositionState({
          duration: this.audioElement.duration,
          playbackRate: this.audioElement.playbackRate,
          position: this.audioElement.currentTime
      });
    }
  }
}

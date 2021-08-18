import {Component, ElementRef, ViewChild} from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {MEDIA_SESSION_STANDARD} from '../technologies';

@Component({
  selector: 'app-media-session-standard',
  templateUrl: './media-session-standard.component.html'
})
export class MediaSessionStandardComponent extends TechnologyComponent {
  technology: Technology = MEDIA_SESSION_STANDARD;

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

  isSupported(): boolean {
    return 'mediaSession' in navigator;
  }

  audioLoaded(): void {
    this.setMetadata();
    this.setSessionListeners();
    this.setAudioListeners();
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
      ['play', () => this.onPlay()],
      ['pause', () => this.onPause()]
    ];

    const noSupportHandlers = [];
    for (const [action, handler] of actionHandlers) {
      try {
        // @ts-ignore
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (error) {
        noSupportHandlers.push(action);
      }
    }
    if (noSupportHandlers.length > 0) {
      this.showError(`Keine Unterstützung für die Media-Session-Aktionen ${noSupportHandlers.join(', ')}.`);
    }
  }

  private onPlay(): void {
    const play = this.audioElement.play();
  }

  private onPause(): void {
    this.audioElement.pause();
  }

  private setAudioListeners(): void {
    this.audioElement.addEventListener('play', () => {
      // @ts-ignore
      navigator.mediaSession.playbackState = 'playing';
    });
    this.audioElement.addEventListener('pause', () => {
      // @ts-ignore
      navigator.mediaSession.playbackState = 'paused';
    });
  }

  updatePositionState() {
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

import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-media-capture-and-streams',
  templateUrl: './media-capture-and-streams.component.html'
})
export class MediaCaptureAndStreamsComponent extends TechnologyComponent {
  technology: Technology = MEDIA_CAPTURE_AND_STREAMS;
}

export const MEDIA_CAPTURE_AND_STREAMS: Technology = {
  name: 'Media Capture and Streams',
  description: 'Erlaubt den Zugriff auf lokale Mediengeräte wie beispielsweise Mikrofone oder Kameras.',
  featureDetections: [
    {
      apiObject: 'window.MediaStream',
      detection: 'MediaStream' in window,
    },
    {
      apiObject: 'window.MediaStreamTrack',
      detection: 'MediaStreamTrack' in window,
    },
    {
      apiObject: 'navigator.mediaDevices',
      detection: 'mediaDevices' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediacapture-streams/' },
  ],
  icon: 'perm_camera_mic',
  routerLink: 'media-capture-and-streams'
};

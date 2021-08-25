import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-audio-output-devices',
  templateUrl: './audio-output-devices.component.html'
})
export class AudioOutputDevicesComponent extends TechnologyDemoComponent implements OnInit {
  @ViewChild('audioElement', { static: false })
  set audioRef(ref: ElementRef<HTMLAudioElement>) {
    this.audioElement = ref.nativeElement;
  }
  private audioElement: HTMLAudioElement;

  audioDevices: MediaDeviceInfo[] = [];

  ngOnInit(): void {
    if ('mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices) {
      navigator.mediaDevices.enumerateDevices()
        .then(res => this.audioDevices = res.filter(d => d.kind === 'audiooutput'))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.mediaDevices.enumerateDevices() (zur Ermittlung der Geräte)');
    }
  }

  onSelectionChanged(audioDevice: MediaDeviceInfo): void {
    if ('setSinkId' in this.audioElement) {
      // @ts-ignore
      this.audioElement.setSinkId(audioDevice.deviceId)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('HTMLMediaElement.setSinkId');
    }
  }

}

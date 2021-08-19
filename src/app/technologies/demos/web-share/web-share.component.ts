import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-share',
  templateUrl: './web-share.component.html'
})
export class WebShareComponent extends TechnologyDemoComponent {
  shareData = {
    title: 'Native Webtechnologien',
    text: 'Schau mal, was das Web heute schon alles kann!',
    url: 'https://renenienaber.github.io/ba-native-webtechnologien/',
  };

  share(): void {
    if ('share' in navigator) {
      // @ts-ignore
      navigator.share(this.shareData).catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.share()');
    }
  }
}

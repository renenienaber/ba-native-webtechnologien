import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-local-font-access',
  templateUrl: './local-font-access.component.html'
})
export class LocalFontAccessComponent extends TechnologyDemoComponent {
  result = [];

  getFonts(): void {
    this.result = [];
    if ('fonts' in navigator) {
      // @ts-ignore
      navigator.fonts.query()
        .then(res => {
          res.forEach(e => this.result.push({
            postscriptName: e.postscriptName,
            fullName: e.fullName,
            family: e.family
          }));
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.fonts');
    }
  }
}

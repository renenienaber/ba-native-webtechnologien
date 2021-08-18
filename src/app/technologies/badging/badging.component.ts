import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {BADGING} from '../technologies';

@Component({
  selector: 'app-badging',
  templateUrl: './badging.component.html'
})
export class BadgingComponent extends TechnologyComponent {
  technology: Technology = BADGING;

  numberAppBadge = 3;
  numberClientBadge = 5;

  setAppBadge(): void {
    if ('setAppBadge' in navigator) {
      // @ts-ignore
      navigator.setAppBadge(this.numberAppBadge).catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.setAppBadge()');
    }
  }

  setClientBadge(): void {
    if ('setClientBadge' in navigator) {
      // @ts-ignore
      navigator.setClientBadge(this.numberClientBadge)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.setClientBadge()');
    }
  }

  clearAppBadge(): void {
    if ('clearAppBadge' in navigator) {
      // @ts-ignore
      navigator.clearAppBadge()
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.clearAppBadge()');
    }
  }

  clearClientBadge(): void {
    if ('clearClientBadge' in navigator) {
      // @ts-ignore
      navigator.clearClientBadge()
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.clearClientBadge()');
    }
  }
}

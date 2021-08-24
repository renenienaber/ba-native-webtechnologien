import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html'
})
export class ClipboardComponent extends TechnologyDemoComponent {
  clipboardText = '';

  private isSupported(): boolean {
    if ('clipboard' in navigator) {
      return true;
    }
    this.showNoSupportError('navigator.clipboard');
    return false;
  }

  readText(): void {
    if (this.isSupported() && 'readText' in navigator.clipboard) {
      navigator.clipboard.readText()
        .then(res => {
          this.clipboardText = res;
          this.showError('Text wurde aus der Zwischenablage geladen.');
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.clipboard.readText()');
    }
  }

  writeText(): void {
    if (this.isSupported() && 'writeText' in navigator.clipboard) {
      navigator.clipboard.writeText(this.clipboardText)
        .then(() => this.showError('Text wurde in die Zwischenablage gelegt.'))
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.clipboard.writeText()');
    }
  }
}

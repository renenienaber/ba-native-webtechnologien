import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-nfc',
  templateUrl: './web-nfc.component.html'
})
export class WebNfcComponent extends TechnologyDemoComponent {
  scanActive = false;
  writeActive = false;

  private isSupported(): boolean {
    if ('NDEFReader' in window) {
      return true;
    } else {
      this.showNoSupportError('window.NDEFReader');
      return false;
    }
  }

  initAndScan(): void {
    if (this.isSupported()) {
      // @ts-ignore
      const ndef = new NDEFReader();

      ndef.scan()
        .then(() => {
          this.scanActive = true;
          ndef.addEventListener('readingerror', err => {
            this.showError(err);
          });
          ndef.addEventListener('reading', () => {
            this.showError('NFC-Tag wurde gelesen.');
          });
        })
        .catch(err => {
          this.scanActive = false;
          this.showError(err);
        });
    }
  }

  initAndWrite(): void {
    if (this.isSupported()) {
      // @ts-ignore
      const ndef = new NDEFReader();

      this.writeActive = true;
      ndef.write('Hallo Welt!')
        .then(() => {
          this.writeActive = false;
          this.showError('Nachricht wurde auf NFC-Tag geschrieben.');
        })
        .catch(err => {
          this.writeActive = false;
          this.showError(err);
        });
    }
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-nfc',
  templateUrl: './web-nfc.component.html'
})
export class WebNfcComponent extends TechnologyDemoComponent implements OnInit, OnDestroy {
  scanActive = false;
  writeActive = false;

  scanAbortController = new AbortController();
  writeAbortController = new AbortController();

  ngOnInit(): void {
    this.scanAbortController.signal.addEventListener('abort', () => this.scanActive = false);
    this.writeAbortController.signal.addEventListener('abort', () => this.writeActive = false);
  }

  ngOnDestroy(): void {
    this.stopScan();
    this.stopWrite();
  }

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

      ndef.scan({ signal: this.scanAbortController.signal })
        .then(() => {
          this.scanActive = true;
          ndef.addEventListener('readingerror', () => {
            this.showError('NFC-Tag wurde empfangen aber konnte nicht ausgelesen werden.');
          });
          ndef.addEventListener('reading', () => {
            this.showError('NFC-Tag wurde empfangen und erfolgreich ausgelesen.');
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
      ndef.write('Hallo Welt!', { signal: this.writeAbortController.signal })
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

  stopScan(): void {
    if (this.scanAbortController) {
      this.scanAbortController.abort();
    }
  }
  stopWrite(): void {
    if (this.writeAbortController) {
      this.writeAbortController.abort();
    }
  }
}

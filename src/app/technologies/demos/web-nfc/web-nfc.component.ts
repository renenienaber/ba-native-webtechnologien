import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-web-nfc',
  templateUrl: './web-nfc.component.html'
})
export class WebNfcComponent extends TechnologyDemoComponent implements OnDestroy {
  scanActive = false;
  writeActive = false;

  scanAbortController;
  writeAbortController = new AbortController();

  ngOnDestroy(): void {
    this.stopScan();
    this.stopWrite();
  }

  private initScanAbortController(): void {
    this.scanAbortController = new AbortController();
    this.scanAbortController.signal.addEventListener('abort', () => this.scanActive = false);
  }
  private initWriteAbortController(): void {
    this.writeAbortController = new AbortController();
    this.writeAbortController.signal.addEventListener('abort', () => this.writeActive = false);
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
      this.initScanAbortController();

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
      this.initWriteAbortController();

      this.writeActive = true;
      ndef.write('Hallo Welt!', { signal: this.writeAbortController.signal })
        .then(() => {
          this.writeActive = false;
          this.showError('Nachricht wurde auf NFC-Tag geschrieben.');
        })
        .catch(err => {
          if (err.name !== 'AbortError') {
            this.writeActive = false;
            this.showError(err);
          }
        });
    }
  }
}

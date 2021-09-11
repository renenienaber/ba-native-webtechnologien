// @ts-nocheck
import {Component, OnDestroy} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html'
})
export class PresentationComponent extends TechnologyDemoComponent implements OnDestroy {
  private RECEIVER_URL = 'presentation/receiver';

  private request;
  connection;

  message = 'Dies ist eine Nachricht an den Receiver.';

  ngOnDestroy(): void {
    this.terminateConnection();
  }

  private isSupported(): boolean {
    if ('presentation' in navigator) {
      return true;
    } else {
      this.showNoSupportError('navigator.presentation');
      return false;
    }
  }

  initAndStartRequest(): void {
    if (this.isSupported()) {
      this.request = new PresentationRequest([this.RECEIVER_URL]);
      this.request.addEventListener('connectionavailable', ev => {
        this.connection = ev.connection;

        this.connection.addEventListener('close', () => this.showError('Präsentations-Verbindung wurde geschlossen.'));
        this.connection.addEventListener('terminate', () => {
          this.showError('Präsentations-Verbindung wurde terminiert.');
          this.connection = undefined;
        });
      });

      navigator.presentation.defaultRequest = this.request;

      this.request.start()
        .then(connection => this.showError('Präsentations-Verbindung hergestellt: ' + connection.url))
        .catch(err => this.showError(err));
    }
  }

  terminateConnection(): void {
    if (this.connection) {
      this.connection.terminate();
    }
  }

  sendMessage(): void {
    if (this.connection) {
      this.connection.send(this.message);
    }
  }
}

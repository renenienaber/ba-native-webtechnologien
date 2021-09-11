// @ts-nocheck
import {Component, OnInit} from '@angular/core';
import {TechnologyDemoComponent} from '../../../technology-demo.component';

@Component({
  selector: 'app-presentation-receiver',
  templateUrl: './presentation-receiver.component.html'
})
export class PresentationReceiverComponent extends TechnologyDemoComponent implements OnInit {
  messages: { timestamp: number, msg: string }[] = [];

  ngOnInit(): void {
    navigator.presentation.receiver.connectionList
      .then(list => {
        list.connections.map(connection => this.addConnection(connection));
        list.addEventListener('connectionavailable', event => {
          this.addConnection(event.connection);
        });
      })
      .catch(err => this.showError(err));
  }

  private addConnection(connection: any): void {
    connection.addEventListener('message', event => {
      this.messages.push({
        timestamp: Date.now(),
        msg: event.data
      });
    });
    connection.addEventListener('close', () => this.showError('Verbindung wurde geschlossen.'));
  }
}

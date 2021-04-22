import { Component } from '@angular/core';
import {Technology} from '../technology';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {}

export const NOTIFICATION_API: Technology = {
  name: 'Notification API',
  description: 'Erlaubt die Anzeige von Systembenachrichtigungen außerhalb des Browserkontextes.',
  references: [
    { name: 'Spezifikation', link: 'https://notifications.spec.whatwg.org/' },
    { name: 'CanIUse', link: 'https://caniuse.com/notifications' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API' },
  ],
  icon: 'notifications',
  routerLink: 'notification-api'
};

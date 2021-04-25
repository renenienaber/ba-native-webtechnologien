import { Component } from '@angular/core';
import {FeatureDetection, Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent extends TechnologyComponent {
  technology: Technology = NOTIFICATION_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'window.Notification',
      detection: 'Notification' in window
    },
    {
      apiObject: 'window.ServiceWorkerRegistration',
      detection: 'ServiceWorkerRegistration' in window
    }
  ];

  private errorNoWindowNotification = 'window.Notification wird nicht unterstützt!';
  private errorNoServiceWorkerRegistration = 'window.ServiceWorkerRegistration wird nicht unterstützt!';
  private errorNoPermission = 'Die entsprechende Berechtigung wurde nicht erteilt!';

  permissionStatus: string;
  notificationTitle = 'Hallo';
  notificationBody = 'Dies ist eine neue Nachricht.';
  notificationIcon = '/assets/icons/icon-128x128.png';

  constructor() {
    super();
    if ('Notification' in window) {
      this.permissionStatus = Notification.permission;
    }
  }

  requestPermission(): void {
    if ('Notification' in window) {
      Notification.requestPermission().then(result => this.permissionStatus = result);
    } else {
      this.showError(this.errorNoWindowNotification);
    }
  }

  createNewNotification(): void {
    if ('Notification' in window) {
      const notification = new Notification(this.notificationTitle, { body: this.notificationBody, icon: this.notificationIcon});
    } else {
      this.showError(this.errorNoWindowNotification);
    }
  }

  createNewServiceWorkerNotification(): void {
    if ('Notification' in window) {
      if ('ServiceWorkerRegistration' in window) {
        navigator.serviceWorker.getRegistration().then((registration) =>
          registration.showNotification(this.notificationTitle, { body: this.notificationBody, icon: this.notificationIcon})
            .catch((err) => this.showError(err))
        );
      } else {
        this.showError(this.errorNoServiceWorkerRegistration);
      }
    } else {
      this.showError(this.errorNoWindowNotification);
    }
  }
}

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

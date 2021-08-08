import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent extends TechnologyComponent {
  technology: Technology = NOTIFICATIONS;

  private errorNoWindowNotification = 'window.Notification wird nicht unterstützt!';
  private errorNoServiceWorkerRegistration = 'window.ServiceWorkerRegistration wird nicht unterstützt!';
  private errorNoPermission = 'Die entsprechende Berechtigung wurde nicht erteilt!';

  permissionStatus: string;
  notificationTitle = 'Hallo';
  notificationBody = 'Dies ist eine neue Nachricht.';
  notificationIcon = './assets/icons/icon-128x128.png';

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

export const NOTIFICATIONS: Technology = {
  name: 'Notifications API',
  description: 'Erlaubt Webseiten, Systembenachrichtigungen für den Endnutzer zu kontrollieren und auch außerhalb des Browserkontextes anzuzeigen, etwa wenn der Benutzer gerade eine andere Anwendung vordergründig geöffnet hat.',
  featureDetections: [
    {
      apiObject: 'window.Notification',
      detection: 'Notification' in window
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://notifications.spec.whatwg.org/' }
  ],
  icon: 'notifications',
  routerLink: 'notifications'
};

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent extends TechnologyDemoComponent {
  private errorNoWindowNotification = 'window.Notification';
  private errorNoServiceWorkerRegistrationNotification = 'window.ServiceWorkerRegistration';
  private errorNoServiceWorkerRegistration = 'Es wurde kein Service Worker registriert! Bitte die App installieren und erneut versuchen.';

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
      this.showNoSupportError(this.errorNoWindowNotification);
    }
  }

  createNewNotification(): void {
    if ('Notification' in window) {
      const notification = new Notification(this.notificationTitle, { body: this.notificationBody, icon: this.notificationIcon});
    } else {
      this.showNoSupportError(this.errorNoWindowNotification);
    }
  }

  createNewServiceWorkerNotification(): void {
    if ('Notification' in window) {
      if ('ServiceWorkerRegistration' in window) {
        navigator.serviceWorker.getRegistration().then((registration) => {
            if (registration) {
              registration.showNotification(this.notificationTitle, { body: this.notificationBody, icon: this.notificationIcon})
                .catch((err) => this.showError(err));
            } else {
              this.showError(this.errorNoServiceWorkerRegistration);
            }
        });
      } else {
        this.showNoSupportError(this.errorNoServiceWorkerRegistrationNotification);
      }
    } else {
      this.showNoSupportError(this.errorNoWindowNotification);
    }
  }
}

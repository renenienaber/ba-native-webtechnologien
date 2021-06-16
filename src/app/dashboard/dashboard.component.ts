import { Component } from '@angular/core';
import {Technology} from '../technologies/technology';
import {WEB_APP_MANIFEST} from '../technologies/web-app-manifest/web-app-manifest.component';
import {SERVICE_WORKER} from '../technologies/service-worker/service-worker.component';
import {NOTIFICATION_API} from '../technologies/notification/notification.component';
import {VIBRATION_API} from '../technologies/vibration/vibration.component';
import {GEOLOCATION_API} from '../technologies/geolocation/geolocation.component';
import {ORIENTATION_SENSOR_API} from '../technologies/orientation-sensor/orientation-sensor.component';
import {DEVICE_ORIENTATION_API} from '../technologies/device-orientation/device-orientation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = [
    CATEGORY_BASIC_PWA,
    CATEGORY_REST,
  ];
}

export interface Category {
  title: string;
  icon: string;
  technologies: Technology[];
}

export const CATEGORY_BASIC_PWA: Category = {
  title: 'Basic PWA',
  icon: 'smartphone',
  technologies: [WEB_APP_MANIFEST, SERVICE_WORKER],
};

export const CATEGORY_REST: Category = {
  title: 'Rest',
  icon: '',
  technologies: [NOTIFICATION_API, VIBRATION_API, GEOLOCATION_API, ORIENTATION_SENSOR_API, DEVICE_ORIENTATION_API],
};

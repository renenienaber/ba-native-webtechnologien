import {VIBRATION_API} from './vibration/vibration.component';
import {WEB_APP_MANIFEST} from './web-app-manifest/web-app-manifest.component';
import {GEOLOCATION_API} from './geolocation/geolocation.component';
import {NOTIFICATION_API} from './notification/notification.component';
import {SERVICE_WORKER} from './service-worker/service-worker.component';
import {DEVICE_ORIENTATION_API} from './device-orientation/device-orientation.component';
import {ORIENTATION_SENSOR_API} from './orientation-sensor/orientation-sensor.component';

export interface Technology {
  name: string;
  icon: string;
  routerLink: string;
}

export interface FeatureDetection {
  apiObject: string;
  detection: boolean;
}

export const TECHNOLOGIES: Technology[] = [
  WEB_APP_MANIFEST,
  SERVICE_WORKER,
  NOTIFICATION_API,
  VIBRATION_API,
  GEOLOCATION_API,
  DEVICE_ORIENTATION_API,
  ORIENTATION_SENSOR_API
];

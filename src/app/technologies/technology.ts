import {PUSH_API} from './push/push.component';
import {VIBRATION_API} from './vibration/vibration.component';
import {WEB_APP_MANIFEST} from './web-app-manifest/web-app-manifest.component';
import {GEOLOCATION_API} from './geolocation/geolocation.component';
import {NOTIFICATION_API} from './notification/notification.component';
import {SERVICE_WORKER} from './service-worker/service-worker.component';

export interface Technology {
  name: string;
  description: string;
  references: Reference[];
  icon: string;
  routerLink: string;
}

export interface Reference {
  name: string;
  link: string;
}

export interface FeatureDetection {
  apiObject: string;
  detection: boolean;
}

export const TECHNOLOGIES: Technology[] = [
  VIBRATION_API,
  GEOLOCATION_API,
  NOTIFICATION_API,
  PUSH_API,
  WEB_APP_MANIFEST,
  SERVICE_WORKER
];

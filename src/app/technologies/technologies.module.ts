import {
  BADGING,
  DEVICEORIENTATION_EVENT,
  GEOLOCATION, MEDIA_SESSION_STANDARD, NOTIFICATIONS,
  ORIENTATION_SENSOR,
  SERVICE_WORKER,
  VIBRATION,
  WEB_APP_MANIFEST
} from './technologies';
import {MediaSessionStandardComponent} from './demos/media-session-standard/media-session-standard.component';
import {OrientationSensorComponent} from './demos/orientation-sensor/orientation-sensor.component';
import {Route, Routes} from '@angular/router';
import {GeolocationComponent} from './demos/geolocation/geolocation.component';
import {NgModule} from '@angular/core';
import {ServiceWorkerComponent} from './demos/service-worker/service-worker.component';
import {WebAppManifestComponent} from './demos/web-app-manifest/web-app-manifest.component';
import {DeviceorientationEventComponent} from './demos/deviceorientation-event/deviceorientation-event.component';
import {VibrationComponent} from './demos/vibration/vibration.component';
import {TECHNOLOGIES} from '../shared/functions';
import {BadgingComponent} from './demos/badging/badging.component';
import {SharedModule} from '../shared/shared.module';
import {NotificationsComponent} from './demos/notification/notifications.component';
import {TechnologyPageComponent} from './technology-page/technology-page.component';
import {Technology} from '../models/technology';

const DEMO_COMPONENTS: {technology: Technology, component: any}[] = [
  {
    technology: BADGING,
    component: BadgingComponent
  },
  {
    technology: DEVICEORIENTATION_EVENT,
    component: DeviceorientationEventComponent
  },
  {
    technology: GEOLOCATION,
    component: GeolocationComponent
  },
  {
    technology: MEDIA_SESSION_STANDARD,
    component: MediaSessionStandardComponent
  },
  {
    technology: NOTIFICATIONS,
    component: NotificationsComponent
  },
  {
    technology: ORIENTATION_SENSOR,
    component: OrientationSensorComponent
  },
  {
    technology: SERVICE_WORKER,
    component: ServiceWorkerComponent
  },
  {
    technology: VIBRATION,
    component: VibrationComponent
  },
  {
    technology: WEB_APP_MANIFEST,
    component: WebAppManifestComponent
  },
];

export const TECHNOLOGYPAGE_ROUTES: Routes = [
  ...DEMO_COMPONENTS.map(d => {
    return {
      path: d.technology.routerLink,
      component: d.component,
      data: { technology: d.technology }
    } as Route;
  }),
  // All Technologies which are not in DEMO_ROUTES
    ...TECHNOLOGIES.filter(technology => !DEMO_COMPONENTS.map(d => d.technology).includes(technology)).map(res => {
    return {
      path: res.routerLink,
      component: TechnologyPageComponent,
      data: { technology: res }
    } as Route;
  }),
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  declarations: [
    TechnologyPageComponent,
    // demos
    BadgingComponent,
    DeviceorientationEventComponent,
    GeolocationComponent,
    MediaSessionStandardComponent,
    NotificationsComponent,
    OrientationSensorComponent,
    ServiceWorkerComponent,
    VibrationComponent,
    WebAppManifestComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class TechnologiesModule {}

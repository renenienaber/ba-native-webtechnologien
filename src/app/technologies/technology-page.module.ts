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
import {DemoFrameComponent} from '../demo-frame/demo-frame.component';
import {NotificationsComponent} from './demos/notification/notifications.component';

const DEMO_ROUTES: Routes = [
  {
    path: BADGING.routerLink,
    component: BadgingComponent
  },
  {
    path: DEVICEORIENTATION_EVENT.routerLink,
    component: DeviceorientationEventComponent
  },
  {
    path: GEOLOCATION.routerLink,
    component: GeolocationComponent
  },
  {
    path: MEDIA_SESSION_STANDARD.routerLink,
    component: MediaSessionStandardComponent
  },
  {
    path: NOTIFICATIONS.routerLink,
    component: NotificationsComponent
  },
  {
    path: ORIENTATION_SENSOR.routerLink,
    component: OrientationSensorComponent
  },
  {
    path: SERVICE_WORKER.routerLink,
    component: ServiceWorkerComponent
  },
  {
    path: VIBRATION.routerLink,
    component: VibrationComponent
  },
  {
    path: WEB_APP_MANIFEST.routerLink,
    component: WebAppManifestComponent
  },
];

export const TECHNOLOGYPAGE_ROUTES: Routes = [
  ...DEMO_ROUTES,
  // All Technologies which are not in DEMO_ROUTES
    ...TECHNOLOGIES.filter(technology => !DEMO_ROUTES.map(d => d.path).includes(technology.routerLink)).map(res => {
    return {
      path: res.routerLink,
      component: DemoFrameComponent,
      data: {technology: res}
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
    DemoFrameComponent,
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
export class TechnologyPageModule {}

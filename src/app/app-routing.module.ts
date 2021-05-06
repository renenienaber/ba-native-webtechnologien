import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {VibrationComponent} from './technologies/vibration/vibration.component';
import {GeolocationComponent} from './technologies/geolocation/geolocation.component';
import {NotificationComponent} from './technologies/notification/notification.component';
import {WebAppManifestComponent} from './technologies/web-app-manifest/web-app-manifest.component';
import {ServiceWorkerComponent} from './technologies/service-worker/service-worker.component';
import {DeviceOrientationComponent} from './technologies/device-orientation/device-orientation.component';
import {OrientationSensorComponent} from './technologies/orientation-sensor/orientation-sensor.component';
import {OrientationSensorPolyfillComponent} from './technologies/orientation-sensor-polyfill/orientation-sensor-polyfill.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'technology',
    children: [
      {
        path: 'web-app-manifest',
        component: WebAppManifestComponent
      },
      {
        path: 'service-worker',
        component: ServiceWorkerComponent
      },
      {
        path: 'vibration-api',
        component: VibrationComponent
      },
      {
        path: 'geolocation-api',
        component: GeolocationComponent
      },
      {
        path: 'notification-api',
        component: NotificationComponent
      },
      {
        path: 'device-orientation-api',
        component: DeviceOrientationComponent
      },
      {
        path: 'orientation-sensor-api',
        component: OrientationSensorComponent
      },
      {
        path: 'orientation-sensor-polyfill',
        component: OrientationSensorPolyfillComponent
      },
      // fallback component - needs to be last one
      {
        path: '**',
        redirectTo: '/about',
      },
    ]
  },
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

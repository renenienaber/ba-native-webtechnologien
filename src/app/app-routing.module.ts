import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {VibrationComponent} from './technologies/vibration/vibration.component';
import {FeatureDetectorComponent} from './feature-detector/feature-detector.component';
import {GeolocationComponent} from './technologies/geolocation/geolocation.component';
import {NotificationComponent} from './technologies/notification/notification.component';
import {PushComponent} from './technologies/push/push.component';
import {WebAppManifestComponent} from './technologies/web-app-manifest/web-app-manifest.component';
import {ServiceWorkerComponent} from './technologies/service-worker/service-worker.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feature-detector',
    component: FeatureDetectorComponent
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
    path: 'push-api',
    component: PushComponent
  },
  {
    path: 'web-app-manifest',
    component: WebAppManifestComponent
  },
  {
    path: 'service-worker',
    component: ServiceWorkerComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ACCELEROMETER, AccelerometerComponent} from './technologies/sensors/accelerometer/accelerometer.component';
import {
  AMBIENT_LIGHT_SENSOR,
  AmbientLightSensorComponent
} from './technologies/sensors/ambient-light-sensor/ambient-light-sensor.component';
import {
  DEVICEORIENTATION_EVENT,
  DeviceorientationEventComponent
} from './technologies/sensors/deviceorientation-event/deviceorientation-event.component';
import {GEOLOCATION_API, GeolocationComponent} from './technologies/sensors/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR, GeolocationSensorComponent} from './technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE, GyroscopeComponent} from './technologies/sensors/gyroscope/gyroscope.component';
import {MAGNETOMETER, MagnetometerComponent} from './technologies/sensors/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR, OrientationSensorComponent} from './technologies/sensors/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR, ProximitySensorComponent} from './technologies/sensors/proximity-sensor/proximity-sensor.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'technology',
    children: [
      // SENSORS
      {
        path: ACCELEROMETER.routerLink,
        component: AccelerometerComponent
      },
      {
        path: AMBIENT_LIGHT_SENSOR.routerLink,
        component: AmbientLightSensorComponent
      },
      {
        path: DEVICEORIENTATION_EVENT.routerLink,
        component: DeviceorientationEventComponent
      },
      {
        path: GEOLOCATION_API.routerLink,
        component: GeolocationComponent
      },
      {
        path: GEOLOCATION_SENSOR.routerLink,
        component: GeolocationSensorComponent
      },
      {
        path: GYROSCOPE.routerLink,
        component: GyroscopeComponent
      },
      {
        path: MAGNETOMETER.routerLink,
        component: MagnetometerComponent
      },
      {
        path: ORIENTATION_SENSOR.routerLink,
        component: OrientationSensorComponent
      },
      {
        path: PROXIMITY_SENSOR.routerLink,
        component: ProximitySensorComponent
      },
      // fallback component - needs to be last one
      {
        path: '**',
        redirectTo: '/dashboard',
      },
    ]
  },
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

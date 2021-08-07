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
import {GEOLOCATION, GeolocationComponent} from './technologies/sensors/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR, GeolocationSensorComponent} from './technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE, GyroscopeComponent} from './technologies/sensors/gyroscope/gyroscope.component';
import {MAGNETOMETER, MagnetometerComponent} from './technologies/sensors/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR, OrientationSensorComponent} from './technologies/sensors/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR, ProximitySensorComponent} from './technologies/sensors/proximity-sensor/proximity-sensor.component';
import {BATTERY_STATUS, BatteryStatusComponent} from './technologies/device-infos/battery-status/battery-status.component';
import {COMPUTE_PRESSURE, ComputePressureComponent} from './technologies/device-infos/compute-pressure/compute-pressure.component';
import {DEVICE_MEMORY, DeviceMemoryComponent} from './technologies/device-infos/device-memory/device-memory.component';
import {DEVICE_POSTURE, DevicePostureComponent} from './technologies/device-infos/device-posture/device-posture.component';
import {MEDIA_CAPABILITIES, MediaCapabilitiesComponent} from './technologies/device-infos/media-capabilities/media-capabilities.component';
import {
  NETWORK_INFORMATION,
  NetworkInformationComponent
} from './technologies/device-infos/network-information/network-information.component';
import {FULLSCREEN, FullscreenComponent} from './technologies/screen/fullscreen/fullscreen.component';
import {
  MULTI_SCREEN_WINDOW_PLACEMENT,
  MultiScreenWindowPlacementComponent
} from './technologies/screen/multi-screen-window-placement/multi-screen-window-placement.component';
import {PRESENTATION, PresentationComponent} from './technologies/screen/presentation/presentation.component';
import {SCREEN_ORIENTATION, ScreenOrientationComponent} from './technologies/screen/screen-orientation/screen-orientation.component';
import {SCREEN_WAKE_LOCK, ScreenWakeLockComponent} from './technologies/screen/screen-wake-lock/screen-wake-lock.component';
import {
  HTML_MEDIA_CAPTURE,
  HtmlMediaCaptureComponent
} from './technologies/cam_mic_capture/html-media-capture/html-media-capture.component';


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
        path: GEOLOCATION.routerLink,
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
      // DEVICE INFOS
      {
        path: BATTERY_STATUS.routerLink,
        component: BatteryStatusComponent
      },
      {
        path: COMPUTE_PRESSURE.routerLink,
        component: ComputePressureComponent
      },
      {
        path: DEVICE_MEMORY.routerLink,
        component: DeviceMemoryComponent
      },
      {
        path: DEVICE_POSTURE.routerLink,
        component: DevicePostureComponent
      },
      {
        path: MEDIA_CAPABILITIES.routerLink,
        component: MediaCapabilitiesComponent
      },
      {
        path: NETWORK_INFORMATION.routerLink,
        component: NetworkInformationComponent
      },
      // SCREEN
      {
        path: FULLSCREEN.routerLink,
        component: FullscreenComponent
      },
      {
        path: MULTI_SCREEN_WINDOW_PLACEMENT.routerLink,
        component: MultiScreenWindowPlacementComponent
      },
      {
        path: PRESENTATION.routerLink,
        component: PresentationComponent
      },
      {
        path: SCREEN_ORIENTATION.routerLink,
        component: ScreenOrientationComponent
      },
      {
        path: SCREEN_WAKE_LOCK.routerLink,
        component: ScreenWakeLockComponent
      },
      // CAM MIC CAPTURE
      {
        path: HTML_MEDIA_CAPTURE.routerLink,
        component: HtmlMediaCaptureComponent
      },
      // INPUT OUTPUT DEVICES
      // INPUT PROCESSING
      // FURTHER HARDWARE PERIPHERAL
      // LOCAL RESOURCES
      // PLATFORM UI
      // FURTHER PLATFORM
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

import { NgModule } from '@angular/core';
import {Route, Routes} from '@angular/router';
import {AccelerometerComponent} from './demos/accelerometer/accelerometer.component';
import {AmbientLightSensorComponent} from './demos/ambient-light-sensor/ambient-light-sensor.component';
import {DeviceorientationEventComponent} from './demos/deviceorientation-event/deviceorientation-event.component';
import {GeolocationComponent} from './demos/geolocation/geolocation.component';
import {GeolocationSensorComponent} from './demos/geolocation-sensor/geolocation-sensor.component';
import {GyroscopeComponent} from './demos/gyroscope/gyroscope.component';
import {MagnetometerComponent} from './demos/magnetometer/magnetometer.component';
import {OrientationSensorComponent} from './demos/orientation-sensor/orientation-sensor.component';
import {ProximitySensorComponent} from './demos/proximity-sensor/proximity-sensor.component';
import {BatteryStatusComponent} from './demos/battery-status/battery-status.component';
import {ComputePressureComponent} from './demos/compute-pressure/compute-pressure.component';
import {DeviceMemoryComponent} from './demos/device-memory/device-memory.component';
import {DevicePostureComponent} from './demos/device-posture/device-posture.component';
import {MediaCapabilitiesComponent} from './demos/media-capabilities/media-capabilities.component';
import {NetworkInformationComponent} from './demos/network-information/network-information.component';
import {FullscreenComponent} from './demos/fullscreen/fullscreen.component';
import {MultiScreenWindowPlacementComponent} from './demos/multi-screen-window-placement/multi-screen-window-placement.component';
import {PresentationComponent} from './demos/presentation/presentation.component';
import {ScreenOrientationComponent} from './demos/screen-orientation/screen-orientation.component';
import {ScreenWakeLockComponent} from './demos/screen-wake-lock/screen-wake-lock.component';
import {HtmlMediaCaptureComponent} from './demos/html-media-capture/html-media-capture.component';
import {MediaCaptureAndStreamsComponent} from './demos/media-capture-and-streams/media-capture-and-streams.component';
import {MediaCaptureFromDomElementsComponent} from './demos/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {MediastreamImageCaptureComponent} from './demos/mediastream-image-capture/mediastream-image-capture.component';
import {MediastreamRecordingComponent} from './demos/mediastream-recording/mediastream-recording.component';
import {ScreenCaptureComponent} from './demos/screen-capture/screen-capture.component';
import {ShapeDetectionComponent} from './demos/shape-detection/shape-detection.component';
import {TextDetectionComponent} from './demos/text-detection/text-detection.component';
import {AudioOutputDevicesComponent} from './demos/audio-output-devices/audio-output-devices.component';
import {GamepadComponent} from './demos/gamepad/gamepad.component';
import {RemotePlaybackComponent} from './demos/remote-playback/remote-playback.component';
import {WebMidiComponent} from './demos/web-midi/web-midi.component';
import {WebhidComponent} from './demos/webhid/webhid.component';
import {WebxrDeviceComponent} from './demos/webxr-device/webxr-device.component';
import {InputDeviceCapabilitiesComponent} from './demos/input-device-capabilities/input-device-capabilities.component';
import {KeyboardLockComponent} from './demos/keyboard-lock/keyboard-lock.component';
import {KeyboardMapComponent} from './demos/keyboard-map/keyboard-map.component';
import {PointerEventsComponent} from './demos/pointer-events/pointer-events.component';
import {PointerLockComponent} from './demos/pointer-lock/pointer-lock.component';
import {TouchEventsComponent} from './demos/touch-events/touch-events.component';
import {VirtualkeyboardComponent} from './demos/virtualkeyboard/virtualkeyboard.component';
import {WebSpeechComponent} from './demos/web-speech/web-speech.component';
import {VibrationComponent} from './demos/vibration/vibration.component';
import {WebBluetoothComponent} from './demos/web-bluetooth/web-bluetooth.component';
import {WebNfcComponent} from './demos/web-nfc/web-nfc.component';
import {WebSerialComponent} from './demos/web-serial/web-serial.component';
import {WebusbComponent} from './demos/webusb/webusb.component';
import {ContactPickerComponent} from './demos/contact-picker/contact-picker.component';
import {ContentIndexComponent} from './demos/content-index/content-index.component';
import {FileComponent} from './demos/file/file.component';
import {FileSystemAccessComponent} from './demos/file-system-access/file-system-access.component';
import {IndexedDatabaseComponent} from './demos/indexed-database/indexed-database.component';
import {LocalFontAccessComponent} from './demos/local-font-access/local-font-access.component';
import {ServiceWorkerComponent} from './demos/service-worker/service-worker.component';
import {StorageStandardComponent} from './demos/storage-standard/storage-standard.component';
import {BadgingComponent} from './demos/badging/badging.component';
import {MediaSessionStandardComponent} from './demos/media-session-standard/media-session-standard.component';
import {NotificationsComponent} from './demos/notification/notifications.component';
import {PaymentRequestComponent} from './demos/payment-request/payment-request.component';
import {PictureInPictureComponent} from './demos/picture-in-picture/picture-in-picture.component';
import {WebAppManifestComponent} from './demos/web-app-manifest/web-app-manifest.component';
import {WebAuthenticationComponent} from './demos/web-authentication/web-authentication.component';
import {WebShareComponent} from './demos/web-share/web-share.component';
import {ClipboardComponent} from './demos/clipboard/clipboard.component';
import {GetInstalledRelatedAppsComponent} from './demos/get-installed-related-apps/get-installed-related-apps.component';
import {IdleDetectionComponent} from './demos/idle-detection/idle-detection.component';
import {PageVisibilityComponent} from './demos/page-visibility/page-visibility.component';
import {PaymentHandlerComponent} from './demos/payment-handler/payment-handler.component';
import {WebotpComponent} from './demos/webotp/webotp.component';
import {DemoFrameComponent} from '../demo-frame/demo-frame.component';
import {SharedModule} from '../shared/shared.module';
import {
  BADGING,
  DEVICEORIENTATION_EVENT,
  GEOLOCATION,
  MEDIA_SESSION_STANDARD, NOTIFICATIONS,
  ORIENTATION_SENSOR, SERVICE_WORKER,
  VIBRATION,
  WEB_APP_MANIFEST
} from './technologies';
import {TECHNOLOGIES} from '../shared/functions';

const DEMO_ROUTES: Routes = [
  {
    path: BADGING.routerLink,
    component: BadgingComponent
  },
  {
    path: MEDIA_SESSION_STANDARD.routerLink,
    component: MediaSessionStandardComponent
  },
  {
    path: WEB_APP_MANIFEST.routerLink,
    component: WebAppManifestComponent
  },
  {
    path: SERVICE_WORKER.routerLink,
    component: ServiceWorkerComponent
  },
  {
    path: NOTIFICATIONS.routerLink,
    component: NotificationsComponent
  },
  {
    path: VIBRATION.routerLink,
    component: VibrationComponent
  },
  {
    path: GEOLOCATION.routerLink,
    component: GeolocationComponent
  },
  {
    path: DEVICEORIENTATION_EVENT.routerLink,
    component: DeviceorientationEventComponent
  },
  {
    path: ORIENTATION_SENSOR.routerLink,
    component: OrientationSensorComponent
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
  // {
  //   path: TECHNOLOGIES.VIBRATION.routerLink,
  //   component: DemoFrameComponent,
  //   data: {technology: TECHNOLOGIES.VIBRATION}
  // },
  // fallback component - needs to be last one
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  declarations: [
    DemoFrameComponent,
    // SENSORS
    AccelerometerComponent,
    AmbientLightSensorComponent,
    DeviceorientationEventComponent,
    GeolocationComponent,
    GeolocationSensorComponent,
    GyroscopeComponent,
    MagnetometerComponent,
    OrientationSensorComponent,
    ProximitySensorComponent,
    // DEVICE INFOS
    BatteryStatusComponent,
    ComputePressureComponent,
    DeviceMemoryComponent,
    DevicePostureComponent,
    MediaCapabilitiesComponent,
    NetworkInformationComponent,
    // SCREEN
    FullscreenComponent,
    MultiScreenWindowPlacementComponent,
    PresentationComponent,
    ScreenOrientationComponent,
    ScreenWakeLockComponent,
    // CAM MIC CAPTURE
    HtmlMediaCaptureComponent,
    MediaCaptureAndStreamsComponent,
    MediaCaptureFromDomElementsComponent,
    MediastreamImageCaptureComponent,
    MediastreamRecordingComponent,
    ScreenCaptureComponent,
    ShapeDetectionComponent,
    TextDetectionComponent,
    // INPUT OUTPUT DEVICES
    AudioOutputDevicesComponent,
    GamepadComponent,
    RemotePlaybackComponent,
    WebMidiComponent,
    WebhidComponent,
    WebxrDeviceComponent,
    // INPUT PROCESSING
    InputDeviceCapabilitiesComponent,
    KeyboardLockComponent,
    KeyboardMapComponent,
    PointerEventsComponent,
    PointerLockComponent,
    TouchEventsComponent,
    VirtualkeyboardComponent,
    WebSpeechComponent,
    // FURTHER HARDWARE AND PERIPHERAL
    VibrationComponent,
    WebBluetoothComponent,
    WebNfcComponent,
    WebSerialComponent,
    WebusbComponent,
    // LOCAL RESOURCES
    ContactPickerComponent,
    ContentIndexComponent,
    FileComponent,
    FileSystemAccessComponent,
    IndexedDatabaseComponent,
    LocalFontAccessComponent,
    ServiceWorkerComponent,
    StorageStandardComponent,
    // PLATFORM UI
    BadgingComponent,
    MediaSessionStandardComponent,
    NotificationsComponent,
    PaymentRequestComponent,
    PictureInPictureComponent,
    WebAppManifestComponent,
    WebAuthenticationComponent,
    WebShareComponent,
    // FURTHER PLATFORM
    ClipboardComponent,
    GetInstalledRelatedAppsComponent,
    IdleDetectionComponent,
    PageVisibilityComponent,
    PaymentHandlerComponent,
    WebotpComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class TechnologyPageModule {}

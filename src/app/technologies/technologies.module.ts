import {
  ACCELEROMETER, AMBIENT_LIGHT_SENSOR, AUDIO_OUTPUT_DEVICES,
  BADGING, BATTERY_STATUS, CLIPBOARD, COMPUTE_PRESSURE,
  CONTACT_PICKER,
  CONTENT_INDEX, DEVICE_MEMORY, DEVICE_POSTURE,
  DEVICEORIENTATION_EVENT,
  FILE,
  FILE_SYSTEM_ACCESS,
  FULLSCREEN, GAMEPAD,
  GEOLOCATION, GEOLOCATION_SENSOR, GYROSCOPE,
  HTML_MEDIA_CAPTURE, IDLE_DETECTION, INPUT_DEVICE_CAPABILITIES, KEYBOARD_LOCK, KEYBOARD_MAP,
  LOCAL_FONT_ACCESS, MAGNETOMETER, MEDIA_CAPABILITIES,
  MEDIA_CAPTURE_AND_STREAMS,
  MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
  MEDIA_SESSION_STANDARD, MEDIASTREAM_IMAGE_CAPTURE, MEDIASTREAM_RECORDING, MULTI_SCREEN_WINDOW_PLACEMENT, NETWORK_INFORMATION,
  NOTIFICATIONS,
  ORIENTATION_SENSOR, PAGE_VISIBILITY,
  PAYMENT_REQUEST,
  PICTURE_IN_PICTURE, POINTER_EVENTS, POINTER_LOCK, PROXIMITY_SENSOR, REMOTE_PLAYBACK, SCREEN_CAPTURE,
  SCREEN_ORIENTATION,
  SCREEN_WAKE_LOCK,
  SERVICE_WORKER, SHAPE_DETECTION, STORAGE_STANDARD, TEXT_DETECTION,
  VIBRATION, VIRTUALKEYBOARD,
  WEB_APP_MANIFEST,
  WEB_AUTHENTICATION,
  WEB_SHARE
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
import { PaymentRequestComponent } from './demos/payment-request/payment-request.component';
import { PictureInPictureComponent } from './demos/picture-in-picture/picture-in-picture.component';
import { WebShareComponent } from './demos/web-share/web-share.component';
import { WebAuthenticationComponent } from './demos/web-authentication/web-authentication.component';
import { FullscreenComponent } from './demos/fullscreen/fullscreen.component';
import { ScreenOrientationComponent } from './demos/screen-orientation/screen-orientation.component';
import { ScreenWakeLockComponent } from './demos/screen-wake-lock/screen-wake-lock.component';
import { ContactPickerComponent } from './demos/contact-picker/contact-picker.component';
import { ContentIndexComponent } from './demos/content-index/content-index.component';
import { FileSystemAccessComponent } from './demos/file-system-access/file-system-access.component';
import { LocalFontAccessComponent } from './demos/local-font-access/local-font-access.component';
import { FileComponent } from './demos/file/file.component';
import { HtmlMediaCaptureComponent } from './demos/html-media-capture/html-media-capture.component';
import { MediaCaptureAndStreamsComponent } from './demos/media-capture-and-streams/media-capture-and-streams.component';
import { MediaCaptureFromDomElementsComponent } from './demos/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import { MediastreamImageCaptureComponent } from './demos/mediastream-image-capture/mediastream-image-capture.component';
import { MediastreamRecordingComponent } from './demos/mediastream-recording/mediastream-recording.component';
import { ScreenCaptureComponent } from './demos/screen-capture/screen-capture.component';
import { ShapeDetectionComponent } from './demos/shape-detection/shape-detection.component';
import { TextDetectionComponent } from './demos/text-detection/text-detection.component';
import { AccelerometerComponent } from './demos/accelerometer/accelerometer.component';
import { GyroscopeComponent } from './demos/gyroscope/gyroscope.component';
import { BatteryStatusComponent } from './demos/battery-status/battery-status.component';
import { DeviceMemoryComponent } from './demos/device-memory/device-memory.component';
import { NetworkInformationComponent } from './demos/network-information/network-information.component';
import { MediaCapabilitiesComponent } from './demos/media-capabilities/media-capabilities.component';
import { KeyboardLockComponent } from './demos/keyboard-lock/keyboard-lock.component';
import { PointerLockComponent } from './demos/pointer-lock/pointer-lock.component';
import { ClipboardComponent } from './demos/clipboard/clipboard.component';
import { PageVisibilityComponent } from './demos/page-visibility/page-visibility.component';
import { AmbientLightSensorComponent } from './demos/ambient-light-sensor/ambient-light-sensor.component';
import { MagnetometerComponent } from './demos/magnetometer/magnetometer.component';
import { ProximitySensorComponent } from './demos/proximity-sensor/proximity-sensor.component';
import { GeolocationSensorComponent } from './demos/geolocation-sensor/geolocation-sensor.component';
import { DevicePostureComponent } from './demos/device-posture/device-posture.component';
import { MultiScreenWindowPlacementComponent } from './demos/multi-screen-window-placement/multi-screen-window-placement.component';
import { AudioOutputDevicesComponent } from './demos/audio-output-devices/audio-output-devices.component';
import { InputDeviceCapabilitiesComponent } from './demos/input-device-capabilities/input-device-capabilities.component';
import { KeyboardMapComponent } from './demos/keyboard-map/keyboard-map.component';
import { PointerEventsComponent } from './demos/pointer-events/pointer-events.component';
import { RemotePlaybackComponent } from './demos/remote-playback/remote-playback.component';
import { StorageStandardComponent } from './demos/storage-standard/storage-standard.component';
import { VirtualkeyboardComponent } from './demos/virtualkeyboard/virtualkeyboard.component';
import { ComputePressureComponent } from './demos/compute-pressure/compute-pressure.component';
import { GamepadComponent } from './demos/gamepad/gamepad.component';
import {IdleDetectionComponent} from './demos/idle-detection/idle-detection.component';

const DEMO_COMPONENTS: {technology: Technology, component: any}[] = [
  {
    technology: ACCELEROMETER,
    component: AccelerometerComponent
  },
  {
    technology: AMBIENT_LIGHT_SENSOR,
    component: AmbientLightSensorComponent
  },
  {
    technology: AUDIO_OUTPUT_DEVICES,
    component: AudioOutputDevicesComponent
  },
  {
    technology: BADGING,
    component: BadgingComponent
  },
  {
    technology: BATTERY_STATUS,
    component: BatteryStatusComponent
  },
  {
    technology: CLIPBOARD,
    component: ClipboardComponent
  },
  {
    technology: COMPUTE_PRESSURE,
    component: ComputePressureComponent
  },
  {
    technology: CONTACT_PICKER,
    component: ContactPickerComponent
  },
  {
    technology: CONTENT_INDEX,
    component: ContentIndexComponent
  },
  {
    technology: DEVICE_MEMORY,
    component: DeviceMemoryComponent
  },
  {
    technology: DEVICE_POSTURE,
    component: DevicePostureComponent
  },
  {
    technology: DEVICEORIENTATION_EVENT,
    component: DeviceorientationEventComponent
  },
  {
    technology: FILE,
    component: FileComponent
  },
  {
    technology: FILE_SYSTEM_ACCESS,
    component: FileSystemAccessComponent
  },
  {
    technology: FULLSCREEN,
    component: FullscreenComponent
  },
  {
    technology: GAMEPAD,
    component: GamepadComponent,
  },
  {
    technology: GEOLOCATION,
    component: GeolocationComponent
  },
  {
    technology: GEOLOCATION_SENSOR,
    component: GeolocationSensorComponent
  },
  {
    technology: GYROSCOPE,
    component: GyroscopeComponent
  },
  {
    technology: HTML_MEDIA_CAPTURE,
    component: HtmlMediaCaptureComponent
  },
  {
    technology: IDLE_DETECTION,
    component: IdleDetectionComponent
  },
  {
    technology: INPUT_DEVICE_CAPABILITIES,
    component: InputDeviceCapabilitiesComponent
  },
  {
    technology: KEYBOARD_LOCK,
    component: KeyboardLockComponent
  },
  {
    technology: KEYBOARD_MAP,
    component: KeyboardMapComponent
  },
  {
    technology: LOCAL_FONT_ACCESS,
    component: LocalFontAccessComponent
  },
  {
    technology: MAGNETOMETER,
    component: MagnetometerComponent
  },
  {
    technology: MEDIA_CAPABILITIES,
    component: MediaCapabilitiesComponent,
  },
  {
    technology: MEDIA_CAPTURE_AND_STREAMS,
    component: MediaCaptureAndStreamsComponent
  },
  {
    technology: MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
    component: MediaCaptureFromDomElementsComponent
  },
  {
    technology: MEDIA_SESSION_STANDARD,
    component: MediaSessionStandardComponent
  },
  {
    technology: MEDIASTREAM_IMAGE_CAPTURE,
    component: MediastreamImageCaptureComponent
  },
  {
    technology: MEDIASTREAM_RECORDING,
    component: MediastreamRecordingComponent
  },
  {
    technology: MULTI_SCREEN_WINDOW_PLACEMENT,
    component: MultiScreenWindowPlacementComponent
  },
  {
    technology: NETWORK_INFORMATION,
    component: NetworkInformationComponent
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
    technology: PAGE_VISIBILITY,
    component: PageVisibilityComponent
  },
  {
    technology: PAYMENT_REQUEST,
    component: PaymentRequestComponent
  },
  {
    technology: PICTURE_IN_PICTURE,
    component: PictureInPictureComponent
  },
  {
    technology: POINTER_EVENTS,
    component: PointerEventsComponent,
  },
  {
    technology: POINTER_LOCK,
    component: PointerLockComponent
  },
  {
    technology: PROXIMITY_SENSOR,
    component: ProximitySensorComponent
  },
  {
    technology: REMOTE_PLAYBACK,
    component: RemotePlaybackComponent
  },
  {
    technology: SCREEN_CAPTURE,
    component: ScreenCaptureComponent
  },
  {
    technology: SCREEN_ORIENTATION,
    component: ScreenOrientationComponent
  },
  {
    technology: SCREEN_WAKE_LOCK,
    component: ScreenWakeLockComponent,
  },
  {
    technology: SERVICE_WORKER,
    component: ServiceWorkerComponent
  },
  {
    technology: SHAPE_DETECTION,
    component: ShapeDetectionComponent
  },
  {
    technology: STORAGE_STANDARD,
    component: StorageStandardComponent
  },
  {
    technology: TEXT_DETECTION,
    component: TextDetectionComponent
  },
  {
    technology: VIBRATION,
    component: VibrationComponent
  },
  {
    technology: VIRTUALKEYBOARD,
    component: VirtualkeyboardComponent
  },
  {
    technology: WEB_APP_MANIFEST,
    component: WebAppManifestComponent
  },
  {
    technology: WEB_AUTHENTICATION,
    component: WebAuthenticationComponent
  },
  {
    technology: WEB_SHARE,
    component: WebShareComponent
  }
];
export function isDemo(technology: Technology): boolean {
  return DEMO_COMPONENTS.map(d => d.technology).includes(technology);
}

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
    WebAppManifestComponent,
    PaymentRequestComponent,
    PictureInPictureComponent,
    WebShareComponent,
    WebAuthenticationComponent,
    FullscreenComponent,
    ScreenOrientationComponent,
    ScreenWakeLockComponent,
    ContactPickerComponent,
    ContentIndexComponent,
    FileSystemAccessComponent,
    LocalFontAccessComponent,
    FileComponent,
    HtmlMediaCaptureComponent,
    MediaCaptureAndStreamsComponent,
    MediaCaptureFromDomElementsComponent,
    MediastreamImageCaptureComponent,
    MediastreamRecordingComponent,
    ScreenCaptureComponent,
    ShapeDetectionComponent,
    TextDetectionComponent,
    AccelerometerComponent,
    GyroscopeComponent,
    BatteryStatusComponent,
    DeviceMemoryComponent,
    NetworkInformationComponent,
    MediaCapabilitiesComponent,
    KeyboardLockComponent,
    PointerLockComponent,
    ClipboardComponent,
    PageVisibilityComponent,
    AmbientLightSensorComponent,
    MagnetometerComponent,
    ProximitySensorComponent,
    GeolocationSensorComponent,
    DevicePostureComponent,
    MultiScreenWindowPlacementComponent,
    AudioOutputDevicesComponent,
    InputDeviceCapabilitiesComponent,
    KeyboardMapComponent,
    PointerEventsComponent,
    RemotePlaybackComponent,
    StorageStandardComponent,
    VirtualkeyboardComponent,
    ComputePressureComponent,
    GamepadComponent,
    IdleDetectionComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class TechnologiesModule {}

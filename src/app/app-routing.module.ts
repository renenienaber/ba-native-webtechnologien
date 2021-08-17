import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ACCELEROMETER, AccelerometerComponent} from './technologies/accelerometer/accelerometer.component';
import {
  AMBIENT_LIGHT_SENSOR,
  AmbientLightSensorComponent
} from './technologies/ambient-light-sensor/ambient-light-sensor.component';
import {
  DEVICEORIENTATION_EVENT,
  DeviceorientationEventComponent
} from './technologies/deviceorientation-event/deviceorientation-event.component';
import {GEOLOCATION, GeolocationComponent} from './technologies/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR, GeolocationSensorComponent} from './technologies/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE, GyroscopeComponent} from './technologies/gyroscope/gyroscope.component';
import {MAGNETOMETER, MagnetometerComponent} from './technologies/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR, OrientationSensorComponent} from './technologies/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR, ProximitySensorComponent} from './technologies/proximity-sensor/proximity-sensor.component';
import {BATTERY_STATUS, BatteryStatusComponent} from './technologies/battery-status/battery-status.component';
import {COMPUTE_PRESSURE, ComputePressureComponent} from './technologies/compute-pressure/compute-pressure.component';
import {DEVICE_MEMORY, DeviceMemoryComponent} from './technologies/device-memory/device-memory.component';
import {DEVICE_POSTURE, DevicePostureComponent} from './technologies/device-posture/device-posture.component';
import {MEDIA_CAPABILITIES, MediaCapabilitiesComponent} from './technologies/media-capabilities/media-capabilities.component';
import {
  NETWORK_INFORMATION,
  NetworkInformationComponent
} from './technologies/network-information/network-information.component';
import {FULLSCREEN, FullscreenComponent} from './technologies/fullscreen/fullscreen.component';
import {
  MULTI_SCREEN_WINDOW_PLACEMENT,
  MultiScreenWindowPlacementComponent
} from './technologies/multi-screen-window-placement/multi-screen-window-placement.component';
import {PRESENTATION, PresentationComponent} from './technologies/presentation/presentation.component';
import {SCREEN_ORIENTATION, ScreenOrientationComponent} from './technologies/screen-orientation/screen-orientation.component';
import {SCREEN_WAKE_LOCK, ScreenWakeLockComponent} from './technologies/screen-wake-lock/screen-wake-lock.component';
import {
  HTML_MEDIA_CAPTURE,
  HtmlMediaCaptureComponent
} from './technologies/html-media-capture/html-media-capture.component';
import {
  MEDIA_CAPTURE_AND_STREAMS,
  MediaCaptureAndStreamsComponent
} from './technologies/media-capture-and-streams/media-capture-and-streams.component';
import {
  MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
  MediaCaptureFromDomElementsComponent
} from './technologies/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {
  MEDIASTREAM_IMAGE_CAPTURE,
  MediastreamImageCaptureComponent
} from './technologies/mediastream-image-capture/mediastream-image-capture.component';
import {
  MEDIASTREAM_RECORDING,
  MediastreamRecordingComponent
} from './technologies/mediastream-recording/mediastream-recording.component';
import {SCREEN_CAPTURE, ScreenCaptureComponent} from './technologies/screen-capture/screen-capture.component';
import {SHAPE_DETECTION, ShapeDetectionComponent} from './technologies/shape-detection/shape-detection.component';
import {TEXT_DETECTION, TextDetectionComponent} from './technologies/text-detection/text-detection.component';
import {
  AUDIO_OUTPUT_DEVICES,
  AudioOutputDevicesComponent
} from './technologies/audio-output-devices/audio-output-devices.component';
import {GAMEPAD, GamepadComponent} from './technologies/gamepad/gamepad.component';
import {REMOTE_PLAYBACK, RemotePlaybackComponent} from './technologies/remote-playback/remote-playback.component';
import {WEB_MIDI, WebMidiComponent} from './technologies/web-midi/web-midi.component';
import {WEBHID, WebhidComponent} from './technologies/webhid/webhid.component';
import {WEBXR_DEVICE, WebxrDeviceComponent} from './technologies/webxr-device/webxr-device.component';
import {
  INPUT_DEVICE_CAPABILITIES,
  InputDeviceCapabilitiesComponent
} from './technologies/input-device-capabilities/input-device-capabilities.component';
import {KEYBOARD_LOCK, KeyboardLockComponent} from './technologies/keyboard-lock/keyboard-lock.component';
import {KEYBOARD_MAP, KeyboardMapComponent} from './technologies/keyboard-map/keyboard-map.component';
import {POINTER_EVENTS, PointerEventsComponent} from './technologies/pointer-events/pointer-events.component';
import {TOUCH_EVENTS, TouchEventsComponent} from './technologies/touch-events/touch-events.component';
import {VIRTUALKEYBOARD, VirtualkeyboardComponent} from './technologies/virtualkeyboard/virtualkeyboard.component';
import {WEB_SPEECH, WebSpeechComponent} from './technologies/web-speech/web-speech.component';
import {POINTER_LOCK, PointerLockComponent} from './technologies/pointer-lock/pointer-lock.component';
import {VIBRATION, VibrationComponent} from './technologies/vibration/vibration.component';
import {WEB_BLUETOOTH, WebBluetoothComponent} from './technologies/web-bluetooth/web-bluetooth.component';
import {WEB_NFC, WebNfcComponent} from './technologies/web-nfc/web-nfc.component';
import {WEB_SERIAL, WebSerialComponent} from './technologies/web-serial/web-serial.component';
import {WEBUSB, WebusbComponent} from './technologies/webusb/webusb.component';
import {CONTACT_PICKER, ContactPickerComponent} from './technologies/contact-picker/contact-picker.component';
import {CONTENT_INDEX, ContentIndexComponent} from './technologies/content-index/content-index.component';
import {FILE, FileComponent} from './technologies/file/file.component';
import {
  FILE_SYSTEM_ACCESS,
  FileSystemAccessComponent
} from './technologies/file-system-access/file-system-access.component';
import {INDEXED_DATABASE, IndexedDatabaseComponent} from './technologies/indexed-database/indexed-database.component';
import {LOCAL_FONT_ACCESS, LocalFontAccessComponent} from './technologies/local-font-access/local-font-access.component';
import {SERVICE_WORKER, ServiceWorkerComponent} from './technologies/service-worker/service-worker.component';
import {STORAGE_STANDARD, StorageStandardComponent} from './technologies/storage-standard/storage-standard.component';
import {BADGING, BadgingComponent} from './technologies/badging/badging.component';
import {
  MEDIA_SESSION_STANDARD,
  MediaSessionStandardComponent
} from './technologies/media-session-standard/media-session-standard.component';
import {NOTIFICATIONS, NotificationsComponent} from './technologies/notification/notifications.component';
import {PAYMENT_REQUEST, PaymentRequestComponent} from './technologies/payment-request/payment-request.component';
import {PICTURE_IN_PICTURE, PictureInPictureComponent} from './technologies/picture-in-picture/picture-in-picture.component';
import {WEB_APP_MANIFEST, WebAppManifestComponent} from './technologies/web-app-manifest/web-app-manifest.component';
import {WEB_AUTHENTICATION, WebAuthenticationComponent} from './technologies/web-authentication/web-authentication.component';
import {WEB_SHARE, WebShareComponent} from './technologies/web-share/web-share.component';
import {CLIPBOARD, ClipboardComponent} from './technologies/clipboard/clipboard.component';
import {
  GET_INSTALLED_RELATED_APPS,
  GetInstalledRelatedAppsComponent
} from './technologies/get-installed-related-apps/get-installed-related-apps.component';
import {IDLE_DETECTION, IdleDetectionComponent} from './technologies/idle-detection/idle-detection.component';
import {PAGE_VISIBILITY, PageVisibilityComponent} from './technologies/page-visibility/page-visibility.component';
import {PAYMENT_HANDLER, PaymentHandlerComponent} from './technologies/payment-handler/payment-handler.component';
import {WEBOTP, WebotpComponent} from './technologies/webotp/webotp.component';

const routesSensors: Routes = [
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
];
const routesDeviceInfos: Routes = [
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
];
const routesScreen: Routes = [
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
  }
];
const routesCamMicCapture: Routes = [
  {
    path: HTML_MEDIA_CAPTURE.routerLink,
    component: HtmlMediaCaptureComponent
  },
  {
    path: MEDIA_CAPTURE_AND_STREAMS.routerLink,
    component: MediaCaptureAndStreamsComponent
  },
  {
    path: MEDIA_CAPTURE_FROM_DOM_ELEMENTS.routerLink,
    component: MediaCaptureFromDomElementsComponent
  },
  {
    path: MEDIASTREAM_IMAGE_CAPTURE.routerLink,
    component: MediastreamImageCaptureComponent
  },
  {
    path: MEDIASTREAM_RECORDING.routerLink,
    component: MediastreamRecordingComponent
  },
  {
    path: SCREEN_CAPTURE.routerLink,
    component: ScreenCaptureComponent
  },
  {
    path: SHAPE_DETECTION.routerLink,
    component: ShapeDetectionComponent
  },
  {
    path: TEXT_DETECTION.routerLink,
    component: TextDetectionComponent
  }
];
const routesInputOutputDevices: Routes = [
  {
    path: AUDIO_OUTPUT_DEVICES.routerLink,
    component: AudioOutputDevicesComponent
  },
  {
    path: GAMEPAD.routerLink,
    component: GamepadComponent
  },
  {
    path: REMOTE_PLAYBACK.routerLink,
    component: RemotePlaybackComponent
  },
  {
    path: WEB_MIDI.routerLink,
    component: WebMidiComponent
  },
  {
    path: WEBHID.routerLink,
    component: WebhidComponent
  },
  {
    path: WEBXR_DEVICE.routerLink,
    component: WebxrDeviceComponent
  }
];
const routesInputProcessing: Routes = [
  {
    path: INPUT_DEVICE_CAPABILITIES.routerLink,
    component: InputDeviceCapabilitiesComponent
  },
  {
    path: KEYBOARD_LOCK.routerLink,
    component: KeyboardLockComponent
  },
  {
    path: KEYBOARD_MAP.routerLink,
    component: KeyboardMapComponent
  },
  {
    path: POINTER_EVENTS.routerLink,
    component: PointerEventsComponent
  },
  {
    path: POINTER_LOCK.routerLink,
    component: PointerLockComponent
  },
  {
    path: TOUCH_EVENTS.routerLink,
    component: TouchEventsComponent
  },
  {
    path: VIRTUALKEYBOARD.routerLink,
    component: VirtualkeyboardComponent
  },
  {
    path: WEB_SPEECH.routerLink,
    component: WebSpeechComponent
  }
];
const routesFurtherHardwareAndPeripheral: Routes = [
  {
    path: VIBRATION.routerLink,
    component: VibrationComponent
  },
  {
    path: WEB_BLUETOOTH.routerLink,
    component: WebBluetoothComponent
  },
  {
    path: WEB_NFC.routerLink,
    component: WebNfcComponent
  },
  {
    path: WEB_SERIAL.routerLink,
    component: WebSerialComponent
  },
  {
    path: WEBUSB.routerLink,
    component: WebusbComponent
  }
];
const routesLocalResources: Routes = [
  {
    path: CONTACT_PICKER.routerLink,
    component: ContactPickerComponent
  },
  {
    path: CONTENT_INDEX.routerLink,
    component: ContentIndexComponent
  },
  {
    path: FILE.routerLink,
    component: FileComponent
  },
  {
    path: FILE_SYSTEM_ACCESS.routerLink,
    component: FileSystemAccessComponent
  },
  {
    path: INDEXED_DATABASE.routerLink,
    component: IndexedDatabaseComponent
  },
  {
    path: LOCAL_FONT_ACCESS.routerLink,
    component: LocalFontAccessComponent
  },
  {
    path: SERVICE_WORKER.routerLink,
    component: ServiceWorkerComponent
  },
  {
    path: STORAGE_STANDARD.routerLink,
    component: StorageStandardComponent
  }
];
const routesPlatformUI: Routes = [
  {
    path: BADGING.routerLink,
    component: BadgingComponent
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
    path: PAYMENT_REQUEST.routerLink,
    component: PaymentRequestComponent
  },
  {
    path: PICTURE_IN_PICTURE.routerLink,
    component: PictureInPictureComponent
  },
  {
    path: WEB_APP_MANIFEST.routerLink,
    component: WebAppManifestComponent
  },
  {
    path: WEB_AUTHENTICATION.routerLink,
    component: WebAuthenticationComponent
  },
  {
    path: WEB_SHARE.routerLink,
    component: WebShareComponent
  },
];
const routesFurtherPlatform: Routes = [
  {
    path: CLIPBOARD.routerLink,
    component: ClipboardComponent
  },
  {
    path: GET_INSTALLED_RELATED_APPS.routerLink,
    component: GetInstalledRelatedAppsComponent
  },
  {
    path: IDLE_DETECTION.routerLink,
    component: IdleDetectionComponent
  },
  {
    path: PAGE_VISIBILITY.routerLink,
    component: PageVisibilityComponent
  },
  {
    path: PAYMENT_HANDLER.routerLink,
    component: PaymentHandlerComponent
  },
  {
    path: WEBOTP.routerLink,
    component: WebotpComponent
  },
];
// FURTHER PLATFORM

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
      ...routesSensors,
      ...routesDeviceInfos,
      ...routesScreen,
      ...routesCamMicCapture,
      ...routesInputOutputDevices,
      ...routesInputProcessing,
      ...routesFurtherHardwareAndPeripheral,
      ...routesLocalResources,
      ...routesPlatformUI,
      ...routesFurtherPlatform,
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

import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import * as TECHNOLOGIES from './technologies/technologies';
import {AccelerometerComponent} from './technologies/accelerometer/accelerometer.component';
import {AmbientLightSensorComponent} from './technologies/ambient-light-sensor/ambient-light-sensor.component';
import {DeviceorientationEventComponent} from './technologies/deviceorientation-event/deviceorientation-event.component';
import {GeolocationComponent} from './technologies/geolocation/geolocation.component';
import {GeolocationSensorComponent} from './technologies/geolocation-sensor/geolocation-sensor.component';
import {GyroscopeComponent} from './technologies/gyroscope/gyroscope.component';
import {MagnetometerComponent} from './technologies/magnetometer/magnetometer.component';
import {OrientationSensorComponent} from './technologies/orientation-sensor/orientation-sensor.component';
import {ProximitySensorComponent} from './technologies/proximity-sensor/proximity-sensor.component';
import {BatteryStatusComponent} from './technologies/battery-status/battery-status.component';
import {ComputePressureComponent} from './technologies/compute-pressure/compute-pressure.component';
import {DeviceMemoryComponent} from './technologies/device-memory/device-memory.component';
import {DevicePostureComponent} from './technologies/device-posture/device-posture.component';
import {MediaCapabilitiesComponent} from './technologies/media-capabilities/media-capabilities.component';
import {NetworkInformationComponent} from './technologies/network-information/network-information.component';
import {FullscreenComponent} from './technologies/fullscreen/fullscreen.component';
import {MultiScreenWindowPlacementComponent} from './technologies/multi-screen-window-placement/multi-screen-window-placement.component';
import {PresentationComponent} from './technologies/presentation/presentation.component';
import {ScreenOrientationComponent} from './technologies/screen-orientation/screen-orientation.component';
import {ScreenWakeLockComponent} from './technologies/screen-wake-lock/screen-wake-lock.component';
import {HtmlMediaCaptureComponent} from './technologies/html-media-capture/html-media-capture.component';
import {MediaCaptureAndStreamsComponent} from './technologies/media-capture-and-streams/media-capture-and-streams.component';
import {MediaCaptureFromDomElementsComponent} from './technologies/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {MediastreamImageCaptureComponent} from './technologies/mediastream-image-capture/mediastream-image-capture.component';
import {MediastreamRecordingComponent} from './technologies/mediastream-recording/mediastream-recording.component';
import {ScreenCaptureComponent} from './technologies/screen-capture/screen-capture.component';
import {ShapeDetectionComponent} from './technologies/shape-detection/shape-detection.component';
import {TextDetectionComponent} from './technologies/text-detection/text-detection.component';
import {AudioOutputDevicesComponent} from './technologies/audio-output-devices/audio-output-devices.component';
import {GamepadComponent} from './technologies/gamepad/gamepad.component';
import {RemotePlaybackComponent} from './technologies/remote-playback/remote-playback.component';
import {WebMidiComponent} from './technologies/web-midi/web-midi.component';
import {WebhidComponent} from './technologies/webhid/webhid.component';
import {WebxrDeviceComponent} from './technologies/webxr-device/webxr-device.component';
import {InputDeviceCapabilitiesComponent} from './technologies/input-device-capabilities/input-device-capabilities.component';
import {KeyboardLockComponent} from './technologies/keyboard-lock/keyboard-lock.component';
import {KeyboardMapComponent} from './technologies/keyboard-map/keyboard-map.component';
import {PointerEventsComponent} from './technologies/pointer-events/pointer-events.component';
import {PointerLockComponent} from './technologies/pointer-lock/pointer-lock.component';
import {TouchEventsComponent} from './technologies/touch-events/touch-events.component';
import {VirtualkeyboardComponent} from './technologies/virtualkeyboard/virtualkeyboard.component';
import {WebSpeechComponent} from './technologies/web-speech/web-speech.component';
import {VibrationComponent} from './technologies/vibration/vibration.component';
import {WebBluetoothComponent} from './technologies/web-bluetooth/web-bluetooth.component';
import {WebNfcComponent} from './technologies/web-nfc/web-nfc.component';
import {WebSerialComponent} from './technologies/web-serial/web-serial.component';
import {WebusbComponent} from './technologies/webusb/webusb.component';
import {ContactPickerComponent} from './technologies/contact-picker/contact-picker.component';
import {ContentIndexComponent} from './technologies/content-index/content-index.component';
import {FileComponent} from './technologies/file/file.component';
import {FileSystemAccessComponent} from './technologies/file-system-access/file-system-access.component';
import {IndexedDatabaseComponent} from './technologies/indexed-database/indexed-database.component';
import {LocalFontAccessComponent} from './technologies/local-font-access/local-font-access.component';
import {ServiceWorkerComponent} from './technologies/service-worker/service-worker.component';
import {StorageStandardComponent} from './technologies/storage-standard/storage-standard.component';
import {BadgingComponent} from './technologies/badging/badging.component';
import {MediaSessionStandardComponent} from './technologies/media-session-standard/media-session-standard.component';
import {NotificationsComponent} from './technologies/notification/notifications.component';
import {PaymentRequestComponent} from './technologies/payment-request/payment-request.component';
import {PictureInPictureComponent} from './technologies/picture-in-picture/picture-in-picture.component';
import {WebAppManifestComponent} from './technologies/web-app-manifest/web-app-manifest.component';
import {WebAuthenticationComponent} from './technologies/web-authentication/web-authentication.component';
import {WebShareComponent} from './technologies/web-share/web-share.component';
import {ClipboardComponent} from './technologies/clipboard/clipboard.component';
import {GetInstalledRelatedAppsComponent} from './technologies/get-installed-related-apps/get-installed-related-apps.component';
import {IdleDetectionComponent} from './technologies/idle-detection/idle-detection.component';
import {PageVisibilityComponent} from './technologies/page-visibility/page-visibility.component';
import {PaymentHandlerComponent} from './technologies/payment-handler/payment-handler.component';
import {WebotpComponent} from './technologies/webotp/webotp.component';
import {DemoFrameComponent} from './demo-frame/demo-frame.component';
import {SharedModule} from './shared/shared.module';

const routesSensors: Routes = [
  {
    path: TECHNOLOGIES.ACCELEROMETER.routerLink,
    component: AccelerometerComponent
  },
  {
    path: TECHNOLOGIES.AMBIENT_LIGHT_SENSOR.routerLink,
    component: AmbientLightSensorComponent
  },
  {
    path: TECHNOLOGIES.DEVICEORIENTATION_EVENT.routerLink,
    component: DeviceorientationEventComponent
  },
  {
    path: TECHNOLOGIES.GEOLOCATION.routerLink,
    component: GeolocationComponent
  },
  {
    path: TECHNOLOGIES.GEOLOCATION_SENSOR.routerLink,
    component: GeolocationSensorComponent
  },
  {
    path: TECHNOLOGIES.GYROSCOPE.routerLink,
    component: GyroscopeComponent
  },
  {
    path: TECHNOLOGIES.MAGNETOMETER.routerLink,
    component: MagnetometerComponent
  },
  {
    path: TECHNOLOGIES.ORIENTATION_SENSOR.routerLink,
    component: OrientationSensorComponent
  },
  {
    path: TECHNOLOGIES.PROXIMITY_SENSOR.routerLink,
    component: ProximitySensorComponent
  },
];
const routesDeviceInfos: Routes = [
  {
    path: TECHNOLOGIES.BATTERY_STATUS.routerLink,
    component: BatteryStatusComponent
  },
  {
    path: TECHNOLOGIES.COMPUTE_PRESSURE.routerLink,
    component: ComputePressureComponent
  },
  {
    path: TECHNOLOGIES.DEVICE_MEMORY.routerLink,
    component: DeviceMemoryComponent
  },
  {
    path: TECHNOLOGIES.DEVICE_POSTURE.routerLink,
    component: DevicePostureComponent
  },
  {
    path: TECHNOLOGIES.MEDIA_CAPABILITIES.routerLink,
    component: MediaCapabilitiesComponent
  },
  {
    path: TECHNOLOGIES.NETWORK_INFORMATION.routerLink,
    component: NetworkInformationComponent
  },
];
const routesScreen: Routes = [
  {
    path: TECHNOLOGIES.FULLSCREEN.routerLink,
    component: FullscreenComponent
  },
  {
    path: TECHNOLOGIES.MULTI_SCREEN_WINDOW_PLACEMENT.routerLink,
    component: MultiScreenWindowPlacementComponent
  },
  {
    path: TECHNOLOGIES.PRESENTATION.routerLink,
    component: PresentationComponent
  },
  {
    path: TECHNOLOGIES.SCREEN_ORIENTATION.routerLink,
    component: ScreenOrientationComponent
  },
  {
    path: TECHNOLOGIES.SCREEN_WAKE_LOCK.routerLink,
    component: ScreenWakeLockComponent
  }
];
const routesCamMicCapture: Routes = [
  {
    path: TECHNOLOGIES.HTML_MEDIA_CAPTURE.routerLink,
    component: HtmlMediaCaptureComponent
  },
  {
    path: TECHNOLOGIES.MEDIA_CAPTURE_AND_STREAMS.routerLink,
    component: MediaCaptureAndStreamsComponent
  },
  {
    path: TECHNOLOGIES.MEDIA_CAPTURE_FROM_DOM_ELEMENTS.routerLink,
    component: MediaCaptureFromDomElementsComponent
  },
  {
    path: TECHNOLOGIES.MEDIASTREAM_IMAGE_CAPTURE.routerLink,
    component: MediastreamImageCaptureComponent
  },
  {
    path: TECHNOLOGIES.MEDIASTREAM_RECORDING.routerLink,
    component: MediastreamRecordingComponent
  },
  {
    path: TECHNOLOGIES.SCREEN_CAPTURE.routerLink,
    component: ScreenCaptureComponent
  },
  {
    path: TECHNOLOGIES.SHAPE_DETECTION.routerLink,
    component: ShapeDetectionComponent
  },
  {
    path: TECHNOLOGIES.TEXT_DETECTION.routerLink,
    component: TextDetectionComponent
  }
];
const routesInputOutputDevices: Routes = [
  {
    path: TECHNOLOGIES.AUDIO_OUTPUT_DEVICES.routerLink,
    component: AudioOutputDevicesComponent
  },
  {
    path: TECHNOLOGIES.GAMEPAD.routerLink,
    component: GamepadComponent
  },
  {
    path: TECHNOLOGIES.REMOTE_PLAYBACK.routerLink,
    component: RemotePlaybackComponent
  },
  {
    path: TECHNOLOGIES.WEB_MIDI.routerLink,
    component: WebMidiComponent
  },
  {
    path: TECHNOLOGIES.WEBHID.routerLink,
    component: WebhidComponent
  },
  {
    path: TECHNOLOGIES.WEBXR_DEVICE.routerLink,
    component: WebxrDeviceComponent
  }
];
const routesInputProcessing: Routes = [
  {
    path: TECHNOLOGIES.INPUT_DEVICE_CAPABILITIES.routerLink,
    component: InputDeviceCapabilitiesComponent
  },
  {
    path: TECHNOLOGIES.KEYBOARD_LOCK.routerLink,
    component: KeyboardLockComponent
  },
  {
    path: TECHNOLOGIES.KEYBOARD_MAP.routerLink,
    component: KeyboardMapComponent
  },
  {
    path: TECHNOLOGIES.POINTER_EVENTS.routerLink,
    component: PointerEventsComponent
  },
  {
    path: TECHNOLOGIES.POINTER_LOCK.routerLink,
    component: PointerLockComponent
  },
  {
    path: TECHNOLOGIES.TOUCH_EVENTS.routerLink,
    component: TouchEventsComponent
  },
  {
    path: TECHNOLOGIES.VIRTUALKEYBOARD.routerLink,
    component: VirtualkeyboardComponent
  },
  {
    path: TECHNOLOGIES.WEB_SPEECH.routerLink,
    component: WebSpeechComponent
  }
];
const routesFurtherHardwareAndPeripheral: Routes = [
  {
    path: TECHNOLOGIES.VIBRATION.routerLink,
    component: VibrationComponent
  },
  {
    path: TECHNOLOGIES.WEB_BLUETOOTH.routerLink,
    component: WebBluetoothComponent
  },
  {
    path: TECHNOLOGIES.WEB_NFC.routerLink,
    component: WebNfcComponent
  },
  {
    path: TECHNOLOGIES.WEB_SERIAL.routerLink,
    component: WebSerialComponent
  },
  {
    path: TECHNOLOGIES.WEBUSB.routerLink,
    component: WebusbComponent
  }
];
const routesLocalResources: Routes = [
  {
    path: TECHNOLOGIES.CONTACT_PICKER.routerLink,
    component: ContactPickerComponent
  },
  {
    path: TECHNOLOGIES.CONTENT_INDEX.routerLink,
    component: ContentIndexComponent
  },
  {
    path: TECHNOLOGIES.FILE.routerLink,
    component: FileComponent
  },
  {
    path: TECHNOLOGIES.FILE_SYSTEM_ACCESS.routerLink,
    component: FileSystemAccessComponent
  },
  {
    path: TECHNOLOGIES.INDEXED_DATABASE.routerLink,
    component: IndexedDatabaseComponent
  },
  {
    path: TECHNOLOGIES.LOCAL_FONT_ACCESS.routerLink,
    component: LocalFontAccessComponent
  },
  {
    path: TECHNOLOGIES.SERVICE_WORKER.routerLink,
    component: ServiceWorkerComponent
  },
  {
    path: TECHNOLOGIES.STORAGE_STANDARD.routerLink,
    component: StorageStandardComponent
  }
];
const routesPlatformUI: Routes = [
  {
    path: TECHNOLOGIES.BADGING.routerLink,
    component: BadgingComponent
  },
  {
    path: TECHNOLOGIES.MEDIA_SESSION_STANDARD.routerLink,
    component: MediaSessionStandardComponent
  },
  {
    path: TECHNOLOGIES.NOTIFICATIONS.routerLink,
    component: NotificationsComponent
  },
  {
    path: TECHNOLOGIES.PAYMENT_REQUEST.routerLink,
    component: PaymentRequestComponent
  },
  {
    path: TECHNOLOGIES.PICTURE_IN_PICTURE.routerLink,
    component: PictureInPictureComponent
  },
  {
    path: TECHNOLOGIES.WEB_APP_MANIFEST.routerLink,
    component: WebAppManifestComponent
  },
  {
    path: TECHNOLOGIES.WEB_AUTHENTICATION.routerLink,
    component: WebAuthenticationComponent
  },
  {
    path: TECHNOLOGIES.WEB_SHARE.routerLink,
    component: WebShareComponent
  },
];
const routesFurtherPlatform: Routes = [
  {
    path: TECHNOLOGIES.CLIPBOARD.routerLink,
    component: ClipboardComponent
  },
  {
    path: TECHNOLOGIES.GET_INSTALLED_RELATED_APPS.routerLink,
    component: GetInstalledRelatedAppsComponent
  },
  {
    path: TECHNOLOGIES.IDLE_DETECTION.routerLink,
    component: IdleDetectionComponent
  },
  {
    path: TECHNOLOGIES.PAGE_VISIBILITY.routerLink,
    component: PageVisibilityComponent
  },
  {
    path: TECHNOLOGIES.PAYMENT_HANDLER.routerLink,
    component: PaymentHandlerComponent
  },
  {
    path: TECHNOLOGIES.WEBOTP.routerLink,
    component: WebotpComponent
  },
];

export const TECHNOLOGYPAGE_ROUTES: Routes = [
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

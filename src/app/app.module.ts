import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VibrationComponent } from './technologies/further-hardware-and-peripheral/vibration/vibration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GeolocationComponent } from './technologies/sensors/geolocation/geolocation.component';
import { NotificationsComponent } from './technologies/platform-ui/notification/notifications.component';
import { WebAppManifestComponent } from './technologies/platform-ui/web-app-manifest/web-app-manifest.component';
import { ServiceWorkerComponent } from './technologies/local-resources/service-worker/service-worker.component';
import { OrientationSensorComponent } from './technologies/sensors/orientation-sensor/orientation-sensor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayFeatureDetectionsComponent } from './display-feature-detections/display-feature-detections.component';
import {DeviceorientationEventComponent} from './technologies/sensors/deviceorientation-event/deviceorientation-event.component';
import {AccelerometerComponent} from './technologies/sensors/accelerometer/accelerometer.component';
import {AmbientLightSensorComponent} from './technologies/sensors/ambient-light-sensor/ambient-light-sensor.component';
import { GeolocationSensorComponent } from './technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import { GyroscopeComponent } from './technologies/sensors/gyroscope/gyroscope.component';
import { MagnetometerComponent } from './technologies/sensors/magnetometer/magnetometer.component';
import { ProximitySensorComponent } from './technologies/sensors/proximity-sensor/proximity-sensor.component';
import { BatteryStatusComponent } from './technologies/device-infos/battery-status/battery-status.component';
import { ComputePressureComponent } from './technologies/device-infos/compute-pressure/compute-pressure.component';
import { DeviceMemoryComponent } from './technologies/device-infos/device-memory/device-memory.component';
import { DevicePostureComponent } from './technologies/device-infos/device-posture/device-posture.component';
import { MediaCapabilitiesComponent } from './technologies/device-infos/media-capabilities/media-capabilities.component';
import { NetworkInformationComponent } from './technologies/device-infos/network-information/network-information.component';
import { FullscreenComponent } from './technologies/screen/fullscreen/fullscreen.component';
import { MultiScreenWindowPlacementComponent } from './technologies/screen/multi-screen-window-placement/multi-screen-window-placement.component';
import { PresentationComponent } from './technologies/screen/presentation/presentation.component';
import { ScreenOrientationComponent } from './technologies/screen/screen-orientation/screen-orientation.component';
import { ScreenWakeLockComponent } from './technologies/screen/screen-wake-lock/screen-wake-lock.component';
import { HtmlMediaCaptureComponent } from './technologies/cam_mic_capture/html-media-capture/html-media-capture.component';
import { MediaCaptureAndStreamsComponent } from './technologies/cam_mic_capture/media-capture-and-streams/media-capture-and-streams.component';
import { MediaCaptureFromDomElementsComponent } from './technologies/cam_mic_capture/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import { MediastreamImageCaptureComponent } from './technologies/cam_mic_capture/mediastream-image-capture/mediastream-image-capture.component';
import { MediastreamRecordingComponent } from './technologies/cam_mic_capture/mediastream-recording/mediastream-recording.component';
import { ScreenCaptureComponent } from './technologies/cam_mic_capture/screen-capture/screen-capture.component';
import { ShapeDetectionComponent } from './technologies/cam_mic_capture/shape-detection/shape-detection.component';
import { TextDetectionComponent } from './technologies/cam_mic_capture/text-detection/text-detection.component';
import { AudioOutputDevicesComponent } from './technologies/input-output-devices/audio-output-devices/audio-output-devices.component';
import { GamepadComponent } from './technologies/input-output-devices/gamepad/gamepad.component';
import { RemotePlaybackComponent } from './technologies/input-output-devices/remote-playback/remote-playback.component';
import { WebMidiComponent } from './technologies/input-output-devices/web-midi/web-midi.component';
import { WebhidComponent } from './technologies/input-output-devices/webhid/webhid.component';
import { WebxrDeviceComponent } from './technologies/input-output-devices/webxr-device/webxr-device.component';
import { InputDeviceCapabilitiesComponent } from './technologies/input-processing/input-device-capabilities/input-device-capabilities.component';
import { KeyboardLockComponent } from './technologies/input-processing/keyboard-lock/keyboard-lock.component';
import { KeyboardMapComponent } from './technologies/input-processing/keyboard-map/keyboard-map.component';
import { PointerEventsComponent } from './technologies/input-processing/pointer-events/pointer-events.component';
import { TouchEventsComponent } from './technologies/input-processing/touch-events/touch-events.component';
import { VirtualkeyboardComponent } from './technologies/input-processing/virtualkeyboard/virtualkeyboard.component';
import { WebSpeechComponent } from './technologies/input-processing/web-speech/web-speech.component';
import { PointerLockComponent } from './technologies/input-processing/pointer-lock/pointer-lock.component';
import { WebBluetoothComponent } from './technologies/further-hardware-and-peripheral/web-bluetooth/web-bluetooth.component';
import { WebNfcComponent } from './technologies/further-hardware-and-peripheral/web-nfc/web-nfc.component';
import { WebSerialComponent } from './technologies/further-hardware-and-peripheral/web-serial/web-serial.component';
import { WebusbComponent } from './technologies/further-hardware-and-peripheral/webusb/webusb.component';
import { ContactPickerComponent } from './technologies/local-resources/contact-picker/contact-picker.component';
import { ContentIndexComponent } from './technologies/local-resources/content-index/content-index.component';
import { FileComponent } from './technologies/local-resources/file/file.component';
import { FileSystemAccessComponent } from './technologies/local-resources/file-system-access/file-system-access.component';
import { IndexedDatabaseComponent } from './technologies/local-resources/indexed-database/indexed-database.component';
import { LocalFontAccessComponent } from './technologies/local-resources/local-font-access/local-font-access.component';
import { StorageStandardComponent } from './technologies/local-resources/storage-standard/storage-standard.component';
import { BadgingComponent } from './technologies/platform-ui/badging/badging.component';
import { MediaSessionStandardComponent } from './technologies/platform-ui/media-session-standard/media-session-standard.component';
import { PaymentRequestComponent } from './technologies/platform-ui/payment-request/payment-request.component';
import { PictureInPictureComponent } from './technologies/platform-ui/picture-in-picture/picture-in-picture.component';
import { WebAuthenticationComponent } from './technologies/platform-ui/web-authentication/web-authentication.component';
import { WebShareComponent } from './technologies/platform-ui/web-share/web-share.component';
import { ClipboardComponent } from './technologies/further-platform/clipboard/clipboard.component';
import { GetInstalledRelatedAppsComponent } from './technologies/further-platform/get-installed-related-apps/get-installed-related-apps.component';
import { IdleDetectionComponent } from './technologies/further-platform/idle-detection/idle-detection.component';
import { PageVisibilityComponent } from './technologies/further-platform/page-visibility/page-visibility.component';
import { PaymentHandlerComponent } from './technologies/further-platform/payment-handler/payment-handler.component';
import { WebotpComponent } from './technologies/further-platform/webotp/webotp.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    DemoFrameComponent,
    DashboardComponent,
    DisplayFeatureDetectionsComponent,
    CategoriesComponent,
    // TECHNOLOGIES
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

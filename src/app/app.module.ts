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
import { VibrationComponent } from './technologies/vibration/vibration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GeolocationComponent } from './technologies/geolocation/geolocation.component';
import { NotificationsComponent } from './technologies/notification/notifications.component';
import { WebAppManifestComponent } from './technologies/web-app-manifest/web-app-manifest.component';
import { ServiceWorkerComponent } from './technologies/service-worker/service-worker.component';
import { OrientationSensorComponent } from './technologies/orientation-sensor/orientation-sensor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayFeatureDetectionsComponent } from './display-feature-detections/display-feature-detections.component';
import {DeviceorientationEventComponent} from './technologies/deviceorientation-event/deviceorientation-event.component';
import {AccelerometerComponent} from './technologies/accelerometer/accelerometer.component';
import {AmbientLightSensorComponent} from './technologies/ambient-light-sensor/ambient-light-sensor.component';
import { GeolocationSensorComponent } from './technologies/geolocation-sensor/geolocation-sensor.component';
import { GyroscopeComponent } from './technologies/gyroscope/gyroscope.component';
import { MagnetometerComponent } from './technologies/magnetometer/magnetometer.component';
import { ProximitySensorComponent } from './technologies/proximity-sensor/proximity-sensor.component';
import { BatteryStatusComponent } from './technologies/battery-status/battery-status.component';
import { ComputePressureComponent } from './technologies/compute-pressure/compute-pressure.component';
import { DeviceMemoryComponent } from './technologies/device-memory/device-memory.component';
import { DevicePostureComponent } from './technologies/device-posture/device-posture.component';
import { MediaCapabilitiesComponent } from './technologies/media-capabilities/media-capabilities.component';
import { NetworkInformationComponent } from './technologies/network-information/network-information.component';
import { FullscreenComponent } from './technologies/fullscreen/fullscreen.component';
import { MultiScreenWindowPlacementComponent } from './technologies/multi-screen-window-placement/multi-screen-window-placement.component';
import { PresentationComponent } from './technologies/presentation/presentation.component';
import { ScreenOrientationComponent } from './technologies/screen-orientation/screen-orientation.component';
import { ScreenWakeLockComponent } from './technologies/screen-wake-lock/screen-wake-lock.component';
import { HtmlMediaCaptureComponent } from './technologies/html-media-capture/html-media-capture.component';
import { MediaCaptureAndStreamsComponent } from './technologies/media-capture-and-streams/media-capture-and-streams.component';
import { MediaCaptureFromDomElementsComponent } from './technologies/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import { MediastreamImageCaptureComponent } from './technologies/mediastream-image-capture/mediastream-image-capture.component';
import { MediastreamRecordingComponent } from './technologies/mediastream-recording/mediastream-recording.component';
import { ScreenCaptureComponent } from './technologies/screen-capture/screen-capture.component';
import { ShapeDetectionComponent } from './technologies/shape-detection/shape-detection.component';
import { TextDetectionComponent } from './technologies/text-detection/text-detection.component';
import { AudioOutputDevicesComponent } from './technologies/audio-output-devices/audio-output-devices.component';
import { GamepadComponent } from './technologies/gamepad/gamepad.component';
import { RemotePlaybackComponent } from './technologies/remote-playback/remote-playback.component';
import { WebMidiComponent } from './technologies/web-midi/web-midi.component';
import { WebhidComponent } from './technologies/webhid/webhid.component';
import { WebxrDeviceComponent } from './technologies/webxr-device/webxr-device.component';
import { InputDeviceCapabilitiesComponent } from './technologies/input-device-capabilities/input-device-capabilities.component';
import { KeyboardLockComponent } from './technologies/keyboard-lock/keyboard-lock.component';
import { KeyboardMapComponent } from './technologies/keyboard-map/keyboard-map.component';
import { PointerEventsComponent } from './technologies/pointer-events/pointer-events.component';
import { TouchEventsComponent } from './technologies/touch-events/touch-events.component';
import { VirtualkeyboardComponent } from './technologies/virtualkeyboard/virtualkeyboard.component';
import { WebSpeechComponent } from './technologies/web-speech/web-speech.component';
import { PointerLockComponent } from './technologies/pointer-lock/pointer-lock.component';
import { WebBluetoothComponent } from './technologies/web-bluetooth/web-bluetooth.component';
import { WebNfcComponent } from './technologies/web-nfc/web-nfc.component';
import { WebSerialComponent } from './technologies/web-serial/web-serial.component';
import { WebusbComponent } from './technologies/webusb/webusb.component';
import { ContactPickerComponent } from './technologies/contact-picker/contact-picker.component';
import { ContentIndexComponent } from './technologies/content-index/content-index.component';
import { FileComponent } from './technologies/file/file.component';
import { FileSystemAccessComponent } from './technologies/file-system-access/file-system-access.component';
import { IndexedDatabaseComponent } from './technologies/indexed-database/indexed-database.component';
import { LocalFontAccessComponent } from './technologies/local-font-access/local-font-access.component';
import { StorageStandardComponent } from './technologies/storage-standard/storage-standard.component';
import { BadgingComponent } from './technologies/badging/badging.component';
import { MediaSessionStandardComponent } from './technologies/media-session-standard/media-session-standard.component';
import { PaymentRequestComponent } from './technologies/payment-request/payment-request.component';
import { PictureInPictureComponent } from './technologies/picture-in-picture/picture-in-picture.component';
import { WebAuthenticationComponent } from './technologies/web-authentication/web-authentication.component';
import { WebShareComponent } from './technologies/web-share/web-share.component';
import { ClipboardComponent } from './technologies/clipboard/clipboard.component';
import { GetInstalledRelatedAppsComponent } from './technologies/get-installed-related-apps/get-installed-related-apps.component';
import { IdleDetectionComponent } from './technologies/idle-detection/idle-detection.component';
import { PageVisibilityComponent } from './technologies/page-visibility/page-visibility.component';
import { PaymentHandlerComponent } from './technologies/payment-handler/payment-handler.component';
import { WebotpComponent } from './technologies/webotp/webotp.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CaniuseEmbedComponent } from './caniuse-embed/caniuse-embed.component';
import {MatMenuModule} from '@angular/material/menu';

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
    CaniuseEmbedComponent,
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
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

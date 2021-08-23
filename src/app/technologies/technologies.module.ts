import {
  ACCELEROMETER,
  BADGING,
  CONTACT_PICKER,
  CONTENT_INDEX,
  DEVICEORIENTATION_EVENT,
  FILE,
  FILE_SYSTEM_ACCESS,
  FULLSCREEN,
  GEOLOCATION,
  HTML_MEDIA_CAPTURE,
  LOCAL_FONT_ACCESS,
  MEDIA_CAPTURE_AND_STREAMS,
  MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
  MEDIA_SESSION_STANDARD, MEDIASTREAM_IMAGE_CAPTURE, MEDIASTREAM_RECORDING,
  NOTIFICATIONS,
  ORIENTATION_SENSOR,
  PAYMENT_REQUEST,
  PICTURE_IN_PICTURE, SCREEN_CAPTURE,
  SCREEN_ORIENTATION,
  SCREEN_WAKE_LOCK,
  SERVICE_WORKER, SHAPE_DETECTION, TEXT_DETECTION,
  VIBRATION,
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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ScreenWakeLockComponent } from './demos/screen-wake-lock/screen-wake-lock.component';
import { ContactPickerComponent } from './demos/contact-picker/contact-picker.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ContentIndexComponent } from './demos/content-index/content-index.component';
import {MatChipsModule} from '@angular/material/chips';
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

const DEMO_COMPONENTS: {technology: Technology, component: any}[] = [
  {
    technology: ACCELEROMETER,
    component: AccelerometerComponent
  },
  {
    technology: BADGING,
    component: BadgingComponent
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
    technology: GEOLOCATION,
    component: GeolocationComponent
  },
  {
    technology: HTML_MEDIA_CAPTURE,
    component: HtmlMediaCaptureComponent
  },
  {
    technology: LOCAL_FONT_ACCESS,
    component: LocalFontAccessComponent
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
    technology: NOTIFICATIONS,
    component: NotificationsComponent
  },
  {
    technology: ORIENTATION_SENSOR,
    component: OrientationSensorComponent
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
    technology: TEXT_DETECTION,
    component: TextDetectionComponent
  },
  {
    technology: VIBRATION,
    component: VibrationComponent
  },
  {
    technology: WEB_AUTHENTICATION,
    component: WebAuthenticationComponent
  },
  {
    technology: WEB_APP_MANIFEST,
    component: WebAppManifestComponent
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
    AccelerometerComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class TechnologiesModule {}

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
import {
  MEDIA_CAPTURE_AND_STREAMS,
  MediaCaptureAndStreamsComponent
} from './technologies/cam_mic_capture/media-capture-and-streams/media-capture-and-streams.component';
import {
  MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
  MediaCaptureFromDomElementsComponent
} from './technologies/cam_mic_capture/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {
  MEDIASTREAM_IMAGE_CAPTURE,
  MediastreamImageCaptureComponent
} from './technologies/cam_mic_capture/mediastream-image-capture/mediastream-image-capture.component';
import {
  MEDIASTREAM_RECORDING,
  MediastreamRecordingComponent
} from './technologies/cam_mic_capture/mediastream-recording/mediastream-recording.component';
import {SCREEN_CAPTURE, ScreenCaptureComponent} from './technologies/cam_mic_capture/screen-capture/screen-capture.component';
import {SHAPE_DETECTION, ShapeDetectionComponent} from './technologies/cam_mic_capture/shape-detection/shape-detection.component';
import {TEXT_DETECTION, TextDetectionComponent} from './technologies/cam_mic_capture/text-detection/text-detection.component';
import {
  AUDIO_OUTPUT_DEVICES,
  AudioOutputDevicesComponent
} from './technologies/input-output-devices/audio-output-devices/audio-output-devices.component';
import {GAMEPAD, GamepadComponent} from './technologies/input-output-devices/gamepad/gamepad.component';
import {REMOTE_PLAYBACK, RemotePlaybackComponent} from './technologies/input-output-devices/remote-playback/remote-playback.component';
import {WEB_MIDI, WebMidiComponent} from './technologies/input-output-devices/web-midi/web-midi.component';
import {WEBHID, WebhidComponent} from './technologies/input-output-devices/webhid/webhid.component';
import {WEBXR_DEVICE, WebxrDeviceComponent} from './technologies/input-output-devices/webxr-device/webxr-device.component';
import {
  INPUT_DEVICE_CAPABILITIES,
  InputDeviceCapabilitiesComponent
} from './technologies/input-processing/input-device-capabilities/input-device-capabilities.component';
import {KEYBOARD_LOCK, KeyboardLockComponent} from './technologies/input-processing/keyboard-lock/keyboard-lock.component';
import {KEYBOARD_MAP, KeyboardMapComponent} from './technologies/input-processing/keyboard-map/keyboard-map.component';
import {POINTER_EVENTS, PointerEventsComponent} from './technologies/input-processing/pointer-events/pointer-events.component';
import {TOUCH_EVENTS, TouchEventsComponent} from './technologies/input-processing/touch-events/touch-events.component';
import {VIRTUALKEYBOARD, VirtualkeyboardComponent} from './technologies/input-processing/virtualkeyboard/virtualkeyboard.component';
import {WEB_SPEECH, WebSpeechComponent} from './technologies/input-processing/web-speech/web-speech.component';
import {POINTER_LOCK, PointerLockComponent} from './technologies/input-processing/pointer-lock/pointer-lock.component';


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
      },
      // INPUT OUTPUT DEVICES
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
      },
      // INPUT PROCESSING
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
      },
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

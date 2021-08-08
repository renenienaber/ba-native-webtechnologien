import {Technology} from '../../technologies/technology';
import {ACCELEROMETER} from '../../technologies/sensors/accelerometer/accelerometer.component';
import {AMBIENT_LIGHT_SENSOR} from '../../technologies/sensors/ambient-light-sensor/ambient-light-sensor.component';
import {DEVICEORIENTATION_EVENT} from '../../technologies/sensors/deviceorientation-event/deviceorientation-event.component';
import {GEOLOCATION} from '../../technologies/sensors/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR} from '../../technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE} from '../../technologies/sensors/gyroscope/gyroscope.component';
import {MAGNETOMETER} from '../../technologies/sensors/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR} from '../../technologies/sensors/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR} from '../../technologies/sensors/proximity-sensor/proximity-sensor.component';
import {BATTERY_STATUS} from '../../technologies/device-infos/battery-status/battery-status.component';
import {COMPUTE_PRESSURE} from '../../technologies/device-infos/compute-pressure/compute-pressure.component';
import {DEVICE_MEMORY} from '../../technologies/device-infos/device-memory/device-memory.component';
import {DEVICE_POSTURE} from '../../technologies/device-infos/device-posture/device-posture.component';
import {MEDIA_CAPABILITIES} from '../../technologies/device-infos/media-capabilities/media-capabilities.component';
import {NETWORK_INFORMATION} from '../../technologies/device-infos/network-information/network-information.component';
import {FULLSCREEN} from '../../technologies/screen/fullscreen/fullscreen.component';
import {MULTI_SCREEN_WINDOW_PLACEMENT} from '../../technologies/screen/multi-screen-window-placement/multi-screen-window-placement.component';
import {PRESENTATION} from '../../technologies/screen/presentation/presentation.component';
import {SCREEN_ORIENTATION} from '../../technologies/screen/screen-orientation/screen-orientation.component';
import {SCREEN_WAKE_LOCK} from '../../technologies/screen/screen-wake-lock/screen-wake-lock.component';
import {HTML_MEDIA_CAPTURE} from '../../technologies/cam_mic_capture/html-media-capture/html-media-capture.component';
import {MEDIA_CAPTURE_AND_STREAMS} from '../../technologies/cam_mic_capture/media-capture-and-streams/media-capture-and-streams.component';
import {MEDIA_CAPTURE_FROM_DOM_ELEMENTS} from '../../technologies/cam_mic_capture/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {MEDIASTREAM_IMAGE_CAPTURE} from '../../technologies/cam_mic_capture/mediastream-image-capture/mediastream-image-capture.component';
import {MEDIASTREAM_RECORDING} from '../../technologies/cam_mic_capture/mediastream-recording/mediastream-recording.component';
import {SCREEN_CAPTURE} from '../../technologies/cam_mic_capture/screen-capture/screen-capture.component';
import {SHAPE_DETECTION} from '../../technologies/cam_mic_capture/shape-detection/shape-detection.component';
import {TEXT_DETECTION} from '../../technologies/cam_mic_capture/text-detection/text-detection.component';
import {AUDIO_OUTPUT_DEVICES} from '../../technologies/input-output-devices/audio-output-devices/audio-output-devices.component';
import {GAMEPAD} from '../../technologies/input-output-devices/gamepad/gamepad.component';
import {REMOTE_PLAYBACK} from '../../technologies/input-output-devices/remote-playback/remote-playback.component';
import {WEB_MIDI} from '../../technologies/input-output-devices/web-midi/web-midi.component';
import {WEBHID} from '../../technologies/input-output-devices/webhid/webhid.component';
import {WEBXR_DEVICE} from '../../technologies/input-output-devices/webxr-device/webxr-device.component';

export interface Category {
  title: string;
  icon: string;
  technologies: Technology[];
}

export const SENSORS: Category = {
  title: 'Sensoren',
  icon: 'sensors',
  technologies: [
    ACCELEROMETER,
    AMBIENT_LIGHT_SENSOR,
    DEVICEORIENTATION_EVENT,
    GEOLOCATION,
    GEOLOCATION_SENSOR,
    GYROSCOPE,
    MAGNETOMETER,
    ORIENTATION_SENSOR,
    PROXIMITY_SENSOR,
  ],
};

export const DEVICE_INFOS: Category = {
  title: 'Geräteinformationen',
  icon: 'perm_device_information',
  technologies: [
    BATTERY_STATUS,
    COMPUTE_PRESSURE,
    DEVICE_MEMORY,
    DEVICE_POSTURE,
    MEDIA_CAPABILITIES,
    NETWORK_INFORMATION
  ],
};

export const SCREEN: Category = {
  title: 'Bildschirm',
  icon: 'monitor',
  technologies: [
    FULLSCREEN,
    MULTI_SCREEN_WINDOW_PLACEMENT,
    PRESENTATION,
    SCREEN_ORIENTATION,
    SCREEN_WAKE_LOCK
  ],
};

export const CAM_MIC_CAPTURE: Category = {
  title: 'Kamera, Mikrofon und Aufnahme',
  icon: 'perm_camera_mic',
  technologies: [
    HTML_MEDIA_CAPTURE,
    MEDIA_CAPTURE_AND_STREAMS,
    MEDIA_CAPTURE_FROM_DOM_ELEMENTS,
    MEDIASTREAM_IMAGE_CAPTURE,
    MEDIASTREAM_RECORDING,
    SCREEN_CAPTURE,
    SHAPE_DETECTION,
    TEXT_DETECTION
  ],
};

export const INPUT_OUTPUT_DEVICES: Category = {
  title: 'Zugriff auf Eingabe- & Ausgabegeräte',
  icon: 'cable',
  technologies: [
    AUDIO_OUTPUT_DEVICES,
    GAMEPAD,
    REMOTE_PLAYBACK,
    WEB_MIDI,
    WEBHID,
    WEBXR_DEVICE
  ],
};

export const INPUT_PROCESSING: Category = {
  title: 'Eingabeverarbeitung',
  icon: 'spellcheck',
  technologies: [],
};

export const FURTHER_HARDWARE_PERIPHERAL: Category = {
  title: 'Weitere Hardware- und Peripheriefunktionalitäten',
  icon: 'settings_input_component',
  technologies: [],
};

export const LOCAL_RESOURCES: Category = {
  title: 'Lokale Ressourcen',
  icon: 'save',
  technologies: [],
};

export const PLATFORM_UI: Category = {
  title: 'Plattformfunktionalitäten mit eigener UI',
  icon: 'dvr',
  technologies: [],
};

export const FURTHER_PLATFORM: Category = {
  title: 'Weitere Plattformfunktionalitäten',
  icon: 'lightbulb',
  technologies: [],
};

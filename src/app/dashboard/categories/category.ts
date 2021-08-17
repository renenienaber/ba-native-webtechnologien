import {Technology} from '../../technologies/technology';
import {ACCELEROMETER} from '../../technologies/accelerometer/accelerometer.component';
import {AMBIENT_LIGHT_SENSOR} from '../../technologies/ambient-light-sensor/ambient-light-sensor.component';
import {DEVICEORIENTATION_EVENT} from '../../technologies/deviceorientation-event/deviceorientation-event.component';
import {GEOLOCATION} from '../../technologies/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR} from '../../technologies/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE} from '../../technologies/gyroscope/gyroscope.component';
import {MAGNETOMETER} from '../../technologies/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR} from '../../technologies/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR} from '../../technologies/proximity-sensor/proximity-sensor.component';
import {BATTERY_STATUS} from '../../technologies/battery-status/battery-status.component';
import {COMPUTE_PRESSURE} from '../../technologies/compute-pressure/compute-pressure.component';
import {DEVICE_MEMORY} from '../../technologies/device-memory/device-memory.component';
import {DEVICE_POSTURE} from '../../technologies/device-posture/device-posture.component';
import {MEDIA_CAPABILITIES} from '../../technologies/media-capabilities/media-capabilities.component';
import {NETWORK_INFORMATION} from '../../technologies/network-information/network-information.component';
import {FULLSCREEN} from '../../technologies/fullscreen/fullscreen.component';
import {MULTI_SCREEN_WINDOW_PLACEMENT} from '../../technologies/multi-screen-window-placement/multi-screen-window-placement.component';
import {PRESENTATION} from '../../technologies/presentation/presentation.component';
import {SCREEN_ORIENTATION} from '../../technologies/screen-orientation/screen-orientation.component';
import {SCREEN_WAKE_LOCK} from '../../technologies/screen-wake-lock/screen-wake-lock.component';
import {HTML_MEDIA_CAPTURE} from '../../technologies/html-media-capture/html-media-capture.component';
import {MEDIA_CAPTURE_AND_STREAMS} from '../../technologies/media-capture-and-streams/media-capture-and-streams.component';
import {MEDIA_CAPTURE_FROM_DOM_ELEMENTS} from '../../technologies/media-capture-from-dom-elements/media-capture-from-dom-elements.component';
import {MEDIASTREAM_IMAGE_CAPTURE} from '../../technologies/mediastream-image-capture/mediastream-image-capture.component';
import {MEDIASTREAM_RECORDING} from '../../technologies/mediastream-recording/mediastream-recording.component';
import {SCREEN_CAPTURE} from '../../technologies/screen-capture/screen-capture.component';
import {SHAPE_DETECTION} from '../../technologies/shape-detection/shape-detection.component';
import {TEXT_DETECTION} from '../../technologies/text-detection/text-detection.component';
import {AUDIO_OUTPUT_DEVICES} from '../../technologies/audio-output-devices/audio-output-devices.component';
import {GAMEPAD} from '../../technologies/gamepad/gamepad.component';
import {REMOTE_PLAYBACK} from '../../technologies/remote-playback/remote-playback.component';
import {WEB_MIDI} from '../../technologies/web-midi/web-midi.component';
import {WEBHID} from '../../technologies/webhid/webhid.component';
import {WEBXR_DEVICE} from '../../technologies/webxr-device/webxr-device.component';
import {INPUT_DEVICE_CAPABILITIES} from '../../technologies/input-device-capabilities/input-device-capabilities.component';
import {KEYBOARD_LOCK} from '../../technologies/keyboard-lock/keyboard-lock.component';
import {KEYBOARD_MAP} from '../../technologies/keyboard-map/keyboard-map.component';
import {POINTER_EVENTS} from '../../technologies/pointer-events/pointer-events.component';
import {TOUCH_EVENTS} from '../../technologies/touch-events/touch-events.component';
import {VIRTUALKEYBOARD} from '../../technologies/virtualkeyboard/virtualkeyboard.component';
import {WEB_SPEECH} from '../../technologies/web-speech/web-speech.component';
import {POINTER_LOCK} from '../../technologies/pointer-lock/pointer-lock.component';
import {VIBRATION} from '../../technologies/vibration/vibration.component';
import {WEB_BLUETOOTH} from '../../technologies/web-bluetooth/web-bluetooth.component';
import {WEB_NFC} from '../../technologies/web-nfc/web-nfc.component';
import {WEB_SERIAL} from '../../technologies/web-serial/web-serial.component';
import {WEBUSB} from '../../technologies/webusb/webusb.component';
import {CONTACT_PICKER} from '../../technologies/contact-picker/contact-picker.component';
import {CONTENT_INDEX} from '../../technologies/content-index/content-index.component';
import {FILE} from '../../technologies/file/file.component';
import {FILE_SYSTEM_ACCESS} from '../../technologies/file-system-access/file-system-access.component';
import {INDEXED_DATABASE} from '../../technologies/indexed-database/indexed-database.component';
import {LOCAL_FONT_ACCESS} from '../../technologies/local-font-access/local-font-access.component';
import {SERVICE_WORKER} from '../../technologies/service-worker/service-worker.component';
import {STORAGE_STANDARD} from '../../technologies/storage-standard/storage-standard.component';
import {BADGING} from '../../technologies/badging/badging.component';
import {MEDIA_SESSION_STANDARD} from '../../technologies/media-session-standard/media-session-standard.component';
import {NOTIFICATIONS} from '../../technologies/notification/notifications.component';
import {PAYMENT_REQUEST} from '../../technologies/payment-request/payment-request.component';
import {PICTURE_IN_PICTURE} from '../../technologies/picture-in-picture/picture-in-picture.component';
import {WEB_APP_MANIFEST} from '../../technologies/web-app-manifest/web-app-manifest.component';
import {WEB_AUTHENTICATION} from '../../technologies/web-authentication/web-authentication.component';
import {WEB_SHARE} from '../../technologies/web-share/web-share.component';
import {CLIPBOARD} from '../../technologies/clipboard/clipboard.component';
import {GET_INSTALLED_RELATED_APPS} from '../../technologies/get-installed-related-apps/get-installed-related-apps.component';
import {IDLE_DETECTION} from '../../technologies/idle-detection/idle-detection.component';
import {PAGE_VISIBILITY} from '../../technologies/page-visibility/page-visibility.component';
import {PAYMENT_HANDLER} from '../../technologies/payment-handler/payment-handler.component';
import {WEBOTP} from '../../technologies/webotp/webotp.component';

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
  technologies: [
    INPUT_DEVICE_CAPABILITIES,
    KEYBOARD_LOCK,
    KEYBOARD_MAP,
    POINTER_EVENTS,
    POINTER_LOCK,
    TOUCH_EVENTS,
    VIRTUALKEYBOARD,
    WEB_SPEECH
  ],
};

export const FURTHER_HARDWARE_AND_PERIPHERAL: Category = {
  title: 'Weitere Hardware- und Peripheriefunktionalitäten',
  icon: 'settings_input_component',
  technologies: [
    VIBRATION,
    WEB_BLUETOOTH,
    WEB_NFC,
    WEB_SERIAL,
    WEBUSB
  ],
};

export const LOCAL_RESOURCES: Category = {
  title: 'Lokale Ressourcen',
  icon: 'save',
  technologies: [
    CONTACT_PICKER,
    CONTENT_INDEX,
    FILE,
    FILE_SYSTEM_ACCESS,
    INDEXED_DATABASE,
    LOCAL_FONT_ACCESS,
    SERVICE_WORKER,
    STORAGE_STANDARD
  ],
};

export const PLATFORM_UI: Category = {
  title: 'Plattformfunktionalitäten mit eigener UI',
  icon: 'dvr',
  technologies: [
    BADGING,
    MEDIA_SESSION_STANDARD,
    NOTIFICATIONS,
    PAYMENT_REQUEST,
    PICTURE_IN_PICTURE,
    WEB_APP_MANIFEST,
    WEB_AUTHENTICATION,
    WEB_SHARE
  ],
};

export const FURTHER_PLATFORM: Category = {
  title: 'Weitere Plattformfunktionalitäten',
  icon: 'lightbulb',
  technologies: [
    CLIPBOARD,
    GET_INSTALLED_RELATED_APPS,
    IDLE_DETECTION,
    PAGE_VISIBILITY,
    PAYMENT_HANDLER,
    WEBOTP
  ],
};

export const CATEGORIES: Category[] = [
  SENSORS,
  DEVICE_INFOS,
  SCREEN,
  CAM_MIC_CAPTURE,
  INPUT_OUTPUT_DEVICES,
  INPUT_PROCESSING,
  FURTHER_HARDWARE_AND_PERIPHERAL,
  LOCAL_RESOURCES,
  PLATFORM_UI,
  FURTHER_PLATFORM
];

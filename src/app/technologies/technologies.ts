import {Technology} from '../models/technology';

// detection functions
function isObjectInHtmlElement(htmlElement: string, object: string): boolean {
  const el = document.createElement(htmlElement);
  return object in el;
}

function isObjectInUIEvent(object: string): boolean {
  const ev = new UIEvent('TestEvent', {});
  return object in ev;
}

function isObjectInServiceWorkerRegistration(object: string): boolean {
  return 'ServiceWorkerRegistration' in window && object in ServiceWorkerRegistration.prototype;
}

export const ACCELEROMETER: Technology = {
  name: 'Accelerometer',
  description: 'Liefert die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen und stellt eine Erweiterung der Generic Sensor API-Spezifikation dar.',
  featureDetections: [
    {
      apiObject: 'window.Accelerometer',
      detection: 'Accelerometer' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/accelerometer/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'speed',
  routerLink: 'accelerometer'
};
export const AMBIENT_LIGHT_SENSOR: Technology = {
  name: 'Ambient Light Sensor',
  description: 'Dient dem Zugriff auf Informationen eines verbauten Lichtsensors, welcher die Helligkeit in der Umgebung erkennt. Sie erweitert dazu die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.AmbientLightSensor',
      detection: 'AmbientLightSensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/ambient-light/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'wb_sunny',
  routerLink: 'ambient-light-sensor'
};
export const AUDIO_OUTPUT_DEVICES: Technology = {
  name: 'Audio Output Devices API',
  description: 'Ermöglicht die Auswahl eines expliziten Audioausgabegerätes für Medieninhalte.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.sinkId',
      detection: isObjectInHtmlElement('audio', 'sinkId'),
    },
    {
      apiObject: 'navigator.mediaDevices.selectAudioOutput()',
      detection: 'mediaDevices' in navigator && 'selectAudioOutput' in navigator.mediaDevices,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/audio-output/' },
  ],
  icon: 'speaker',
  routerLink: 'audio-output-devices'
};
export const BADGING: Technology = {
  name: 'Badging API',
  description: 'Ermöglicht es Webseiten und installierten Webanwendungen, außerhalb des Webseiteninhaltes Badges darzustellen.',
  featureDetections: [
    {
      apiObject: 'navigator.setAppBadge()',
      detection: 'setAppBadge' in navigator,
    },
    {
      apiObject: 'navigator.clearAppBadge()',
      detection: 'clearAppBadge' in navigator,
    },
    {
      apiObject: 'navigator.setClientBadge()',
      detection: 'setClientBadge' in navigator,
    },
    {
      apiObject: 'navigator.clearClientBadge()',
      detection: 'clearClientBadge' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/badging/' },
  ],
  icon: 'mark_email_unread',
  routerLink: 'badging'
};
export const BATTERY_STATUS: Technology = {
  name: 'Battery Status API',
  description: 'Mithilfe dieser API lassen sich Informationen zum Batteriestatus des Endgerätes auslesen.',
  featureDetections: [
    {
      apiObject: 'navigator.getBattery()',
      detection: 'getBattery' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/battery-status/' },
  ],
  icon: 'battery_full',
  routerLink: 'battery-status'
};
export const CLIPBOARD: Technology = {
  name: 'Clipboard API and Events',
  description: 'Ermöglicht den Zugriff auf Daten in der Systemzwischenablage.',
  featureDetections: [
    {
      apiObject: 'navigator.clipboard',
      detection: 'clipboard' in navigator,
    },
    {
      apiObject: 'window.ClipboardEvent',
      detection: 'ClipboardEvent' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/clipboard-apis/' },
  ],
  icon: 'content_paste',
  routerLink: 'clipboard'
};
export const COMPUTE_PRESSURE: Technology = {
  name: 'Compute Pressure API',
  description: 'Ermöglicht es Webanwendungen, Informationen über die CPU-Nutzung des Gerätes zu erlangen.',
  featureDetections: [
    {
      apiObject: 'window.ComputePressureObserver',
      detection: 'ComputePressureObserver' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://oyiptong.github.io/compute-pressure/' },
  ],
  icon: 'running_with_errors',
  routerLink: 'compute-pressure'
};
export const CONTACT_PICKER: Technology = {
  name: 'Contact Picker API',
  description: 'Ermöglicht den Zugriff auf Informationen zu den eingespeicherten Kontakten des Benutzers.',
  featureDetections: [
    {
      apiObject: 'navigator.contacts',
      detection: 'contacts' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/contact-api/spec/' },
  ],
  icon: 'contact_page',
  routerLink: 'contact-picker'
};
export const CONTENT_INDEX: Technology = {
  name: 'Content Index',
  description: 'Ermöglicht Webseiten, offlinefähige Inhalte im Browser zu registrieren, sodass dem Benutzer kenntlich gemacht werden kann, welche konkreten Inhalte offline verfügbar sind.',
  featureDetections: [
    {
      apiObject: 'ServiceWorkerRegistration.index',
      detection: isObjectInServiceWorkerRegistration('index'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/content-index/spec/' },
  ],
  icon: 'list',
  routerLink: 'content-index'
};
export const DEVICE_MEMORY: Technology = {
  name: 'Device Memory',
  description: 'Definiert eine API, mit der die ungefähre Größe des Arbeitsspeichers des Endgerätes ausgelesen werden kann.',
  featureDetections: [
    {
      apiObject: 'navigator.deviceMemory',
      detection: 'deviceMemory' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/device-memory-1/' },
  ],
  icon: 'memory',
  routerLink: 'device-memory'
};
export const DEVICE_POSTURE: Technology = {
  name: 'Device Posture API',
  description: 'Ermöglicht es, die Ausrichtung des Endgerätes zu erkennen. Die API nimmt dabei insbesondere auf Geräte mit einem faltbaren Bildschirm oder zwei Bildschirmen, zwischen denen das Gerät gefaltet werden kann, Bezug.',
  featureDetections: [
    {
      apiObject: 'navigator.devicePosture',
      detection: 'devicePosture' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/device-posture/' },
  ],
  icon: 'splitscreen',
  routerLink: 'device-posture'
};
export const DEVICEORIENTATION_EVENT: Technology = {
  name: 'DeviceOrientation Event',
  description: 'Ermöglicht den Zugriff auf Informationen über die physische Haltung und Bewegung eines Endgerätes.',
  featureDetections: [
    {
      apiObject: 'window.DeviceOrientationEvent',
      detection: 'DeviceOrientationEvent' in window
    },
    {
      apiObject: 'window.DeviceMotionEvent',
      detection: 'DeviceMotionEvent' in window
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-event/' },
  ],
  icon: 'screen_rotation',
  routerLink: 'deviceorientation-event'
};
export const FILE: Technology = {
  name: 'File API',
  description: 'Spezifiziert die Umsetzung von Dateiobjekten in Webanwendungen sowie deren Auswahl und Zugriff.',
  featureDetections: [
    {
      apiObject: 'window.FileReader',
      detection: 'FileReader' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/FileAPI/' },
  ],
  icon: 'file_present',
  routerLink: 'file'
};
export const FILE_SYSTEM_ACCESS: Technology = {
  name: 'File System Access',
  description: 'Definiert eine API, um in Webanwendungen die Interaktion mit Dateien des Endgerätes zu ermöglichen.',
  featureDetections: [
    {
      apiObject: 'window.showOpenFilePicker()',
      detection: 'showOpenFilePicker' in window,
    },
    {
      apiObject: 'window.showSaveFilePicker()',
      detection: 'showSaveFilePicker' in window,
    },
    {
      apiObject: 'window.showDirectoryPicker()',
      detection: 'showDirectoryPicker' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/file-system-access/' },
  ],
  icon: 'snippet_folder',
  routerLink: 'file-system-access'
};
export const FULLSCREEN: Technology = {
  name: 'Fullscreen API',
  description: 'Ermöglicht es, Webanwendungen oder Teile dieser im Vollbildmodus darzustellen.',
  featureDetections: [
    {
      apiObject: 'Element.requestFullscreen()',
      detection: isObjectInHtmlElement('div', 'requestFullscreen'),
    },
    {
      apiObject: 'document.exitFullscreen()',
      detection: 'exitFullscreen' in document,
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://fullscreen.spec.whatwg.org/' },
  ],
  icon: 'settings_overscan',
  routerLink: 'fullscreen'
};
export const GAMEPAD: Technology = {
  name: 'Gamepad',
  description: 'Ermöglicht den Zugriff auf Signale von Gamepads.',
  featureDetections: [
    {
      apiObject: 'navigator.getGamepads()',
      detection: 'getGamepads' in navigator,
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/gamepad/' },
  ],
  icon: 'sports_esports',
  routerLink: 'gamepad'
};
export const GEOLOCATION: Technology = {
  name: 'Geolocation API',
  description: 'Ermöglicht den Zugriff auf geografische Standortinformationen des Endgerätes.',
  featureDetections: [
    {
      apiObject: 'navigator.geolocation',
      detection: 'geolocation' in navigator
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/geolocation/' }
  ],
  icon: 'location_on',
  routerLink: 'geolocation'
};
export const GEOLOCATION_SENSOR: Technology = {
  name: 'Geolocation Sensor',
  description: 'Ermöglicht den Zugriff auf geografische Standortinformationen des Endgerätes unter Nutzung der Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.GeolocationSensor',
      detection: 'GeolocationSensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/geolocation-sensor/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'location_on',
  routerLink: 'geolocation-sensor'
};
export const GET_INSTALLED_RELATED_APPS: Technology = {
  name: 'Get Installed Related Apps API',
  description: 'Ermöglicht es Webanwendungen, herauszufinden, ob eine verwandte Anwendung (unabhängig des Anwendungstyps, wie PWA oder eine Native App) in der vorliegenden Ausführungsumgebung bereits installiert ist.',
  featureDetections: [
    {
      apiObject: 'navigator.getInstalledRelatedApps()',
      detection: 'getInstalledRelatedApps' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/get-installed-related-apps/spec/' },
  ],
  icon: 'apps_outage',
  routerLink: 'get-installed-related-apps'
};
export const GYROSCOPE: Technology = {
  name: 'Gyroscope',
  description: 'API für den Zugriff auf Sensorinformationen, welche unter Verwendung der Generic Sensor API die Drehgeschwindigkeit des Gerätes entlang aller drei Achsen wiedergibt.',
  featureDetections: [
    {
      apiObject: 'window.Gyroscope',
      detection: 'Gyroscope' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/gyroscope/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'speed',
  routerLink: 'gyroscope'
};
export const HTML_MEDIA_CAPTURE: Technology = {
  name: 'HTML Media Capture',
  description: 'Definiert eine HTML-Erweiterung, die es dem Benutzer ermöglicht, Mediendateien durch die Mechanismen der Ausführungsumgebung, wie beispielsweise die Kamera- oder Mikrofonfunktion, aufzunehmen und auszuwählen.',
  featureDetections: [
    {
      apiObject: 'HTMLInputElement.capture',
      detection: isObjectInHtmlElement('input', 'capture')
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/html-media-capture/' },
  ],
  icon: 'add_a_photo',
  routerLink: 'html-media-capture'
};
export const IDLE_DETECTION: Technology = {
  name: 'Idle Detection API',
  description: 'Eine API, mit der ermittelt werden kann, ob ein Benutzer das Endgerät aktiv verwendet. Der Aktivitätsstatus wird dabei zum Einen auf die Anwesenheit des Benutzers und zum Anderen auf den Bildschirm des Endgerätes bezogen.',
  featureDetections: [
    {
      apiObject: 'window.IdleDetector',
      detection: 'IdleDetector' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/idle-detection/' },
  ],
  icon: 'nightlight_round',
  routerLink: 'idle-detection'
};
export const INDEXED_DATABASE: Technology = {
  name: 'Indexed Database API',
  description: 'Schnittstelle für die Umsetzung einer Verwaltung für Schlüssel-Wert-Daten (key value data).',
  featureDetections: [
    {
      apiObject: 'window.indexedDB',
      detection: 'indexedDB' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/IndexedDB-2/' },
  ],
  icon: 'inventory',
  routerLink: 'indexed-database'
};
export const INPUT_DEVICE_CAPABILITIES: Technology = {
  name: 'Input Device Capabilities',
  description: 'Definiert eine Webtechnologie, um zusätzliche Informationen über die Fähigkeiten eines Gerätes zu erlangen, welches Eingabeereignisse auslöst.',
  featureDetections: [
    {
      apiObject: 'UIEvent.sourceCapabilities()',
      detection: isObjectInUIEvent('sourceCapabilities')
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/input-device-capabilities/' },
  ],
  icon: 'perm_device_information',
  routerLink: 'input-device-capabilities'
};
export const KEYBOARD_LOCK: Technology = {
  name: 'Keyboard Lock',
  description: 'Ermöglicht einer Webseite, auch diejenigen Tasten zu erfassen, welche normalerweise vom zugrundeliegenden Betriebssystem reserviert sind.',
  featureDetections: [
    {
      apiObject: 'navigator.keyboard',
      detection: 'keyboard' in navigator
    },
    {
      apiObject: 'navigator.keyboard.lock()',
      detection: 'keyboard' in navigator && 'lock' in (navigator as any).keyboard
    },
    {
      apiObject: 'navigator.keyboard.unlock()',
      detection: 'keyboard' in navigator && 'unlock' in (navigator as any).keyboard
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/keyboard-lock/' },
  ],
  icon: 'keyboard_hide',
  routerLink: 'keyboard-lock'
};
export const KEYBOARD_MAP: Technology = {
  name: 'Keyboard Map',
  description: 'Eine API, um basierend auf das im Betriebssystem eingestellte Tastaturlayout die hinter den \"codes\" (physische Tasten) liegenden \"keys\" (durch Ausführungsumgebung interpretierter Wert) zurückzugeben.',
  featureDetections: [
    {
      apiObject: 'navigator.keyboard',
      detection: 'keyboard' in navigator
    },
    {
      apiObject: 'navigator.keyboard.getLayoutMap()',
      detection: 'keyboard' in navigator && 'getLayoutMap' in (navigator as any).keyboard
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/keyboard-map/' },
  ],
  icon: 'keyboard',
  routerLink: 'keyboard-map'
};
export const LOCAL_FONT_ACCESS: Technology = {
  name: 'Local Font Access API',
  description: 'Ermöglicht den Zugriff auf in der Ausführungsumgebung vorliegende Systemschriftarten (Fonts).',
  featureDetections: [
    {
      apiObject: 'navigator.fonts',
      detection: 'fonts' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/local-font-access/' },
  ],
  icon: 'font_download',
  routerLink: 'local-font-access'
};
export const MAGNETOMETER: Technology = {
  name: 'Magnetometer',
  description: 'Ermöglicht unter Verwendung der Generic Sensor API den Zugriff auf Informationen eines verbauten Magnetometers zur Erkennung des zugrundeliegenden Magnetfeldes.',
  featureDetections: [
    {
      apiObject: 'window.Magnetometer',
      detection: 'Magnetometer' in window,
    },
    {
      apiObject: 'window.UncalibratedMagnetometer',
      detection: 'UncalibratedMagnetometer' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/magnetometer/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'travel_explore',
  routerLink: 'magnetometer'
};
export const MEDIA_CAPABILITIES: Technology = {
  name: 'Media Capabilities',
  description: 'Die Spezifikation definiert Möglichkeiten zur Eruierung der Fähigkeiten hinsichtlich der Ausgabe, Kodierung und Dekodierung eines Gerätes, sodass eine optimale Auswahl und Umsetzung von Medieninhalten für den Nutzer ermöglicht wird.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaCapabilities',
      detection: 'mediaCapabilities' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/media-capabilities/' },
  ],
  icon: 'perm_media',
  routerLink: 'media-capabilities'
};
export const MEDIA_CAPTURE_AND_STREAMS: Technology = {
  name: 'Media Capture and Streams',
  description: 'Erlaubt den Zugriff auf lokale Mediengeräte wie beispielsweise Mikrofone oder Kameras.',
  featureDetections: [
    {
      apiObject: 'window.MediaStream',
      detection: 'MediaStream' in window,
    },
    {
      apiObject: 'window.MediaStreamTrack',
      detection: 'MediaStreamTrack' in window,
    },
    {
      apiObject: 'navigator.mediaDevices',
      detection: 'mediaDevices' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediacapture-streams/' },
  ],
  icon: 'perm_camera_mic',
  routerLink: 'media-capture-and-streams'
};
export const MEDIA_CAPTURE_FROM_DOM_ELEMENTS: Technology = {
  name: 'Media Capture from DOM Elements',
  description: 'In dieser Spezifikation wird definiert, wie Medieninhalte aus DOM-Elementen als MediaStream-Objekt abgerufen werden können.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.captureStream()',
      detection: isObjectInHtmlElement('audio', 'captureStream'),
    },
    {
      apiObject: 'HTMLCanvasElement.captureStream()',
      detection: isObjectInHtmlElement('canvas', 'captureStream'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediacapture-fromelement/' },
  ],
  icon: 'perm_camera_mic',
  routerLink: 'media-capture-from-dom-elements'
};
export const MEDIA_SESSION_STANDARD: Technology = {
  name: 'Media Session Standard',
  description: 'Ermöglicht es, in Bezug auf Medien benutzerdefinierte Metadaten in Betriebsssystem-UI anzuzeigen, bestehende Steuerungselemente anzupassen und auf Medientasten zuzugreifen.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaSession',
      detection: 'mediaSession' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediasession/' },
  ],
  icon: 'not_started',
  routerLink: 'media-session-standard'
};
export const MEDIASTREAM_IMAGE_CAPTURE: Technology = {
  name: 'MediaStream Image Capture',
  description: 'Eine API zur Aufnahme von Bildern durch ein fotografiefähiges Gerät unter der Verwendung von MediaStreamTrack-Objekten.',
  featureDetections: [
    {
      apiObject: 'window.ImageCapture',
      detection: 'ImageCapture' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/image-capture/' },
  ],
  icon: 'image',
  routerLink: 'mediastream-image-capture'
};
export const MEDIASTREAM_RECORDING: Technology = {
  name: 'MediaStream Recording',
  description: 'Definiert die MediaRecorder API zur Umsetzung von Aufnahmen unter der Verwendung von MediaStream-Objekten.',
  featureDetections: [
    {
      apiObject: 'window.MediaRecorder',
      detection: 'MediaRecorder' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/mediastream-recording/' },
  ],
  icon: 'radio_button_checked',
  routerLink: 'mediastream-recording'
};
export const MULTI_SCREEN_WINDOW_PLACEMENT: Technology = {
  name: 'Multi-Screen Window Placement',
  description: 'Definiert APIs, mit denen Informationen über angeschlossene Bildschirme abgefragt und Fenster relativ zu diesen positioniert werden können.',
  featureDetections: [
    {
      apiObject: 'window.getScreens()',
      detection: 'getScreens' in window
    },
    {
      apiObject: 'window.screen.isExtended',
      detection: 'screen' in window && 'isExtended' in window.screen
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://webscreens.github.io/window-placement/' },
  ],
  icon: 'window',
  routerLink: 'multi-screen-window-placement'
};
export const NETWORK_INFORMATION: Technology = {
  name: 'Network Information API',
  description: 'Ermöglicht Webanwendungen den Zugriff auf Informationen über die vom Gerät verwendete Netzwerkverbindung.',
  featureDetections: [
    {
      apiObject: 'navigator.connection',
      detection: 'connection' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/netinfo/' },
  ],
  icon: 'network_check',
  routerLink: 'network-information'
};
export const NOTIFICATIONS: Technology = {
  name: 'Notifications API',
  description: 'Erlaubt Webseiten, Systembenachrichtigungen für den Endnutzer zu kontrollieren und auch außerhalb des Browserkontextes anzuzeigen, etwa wenn der Benutzer gerade eine andere Anwendung vordergründig geöffnet hat.',
  featureDetections: [
    {
      apiObject: 'window.Notification',
      detection: 'Notification' in window
    },
    {
      apiObject: 'ServiceWorkerRegistration.showNotification()',
      detection: isObjectInServiceWorkerRegistration('showNotification')
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://notifications.spec.whatwg.org/' }
  ],
  icon: 'notifications',
  routerLink: 'notifications'
};
export const ORIENTATION_SENSOR: Technology = {
  name: 'Orientation Sensor',
  description: 'Definiert eine Webtechnologie zur Erfassung der physischen Orientierung des Endgerätes und erweitert die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.AbsoluteOrientationSensor',
      detection: 'AbsoluteOrientationSensor' in window
    },
    {
      apiObject: 'window.RelativeOrientationSensor',
      detection: 'RelativeOrientationSensor' in window
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/orientation-sensor/'},
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'screen_rotation',
  routerLink: 'orientation-sensor'
};
export const PAGE_VISIBILITY: Technology = {
  name: 'Page Visibility',
  description: 'Mithilfe dieser Webtechnologie kann ermittelt werden, ob eine Webseite für den Benutzer sichtbar ist.',
  featureDetections: [
    {
      apiObject: 'document.visibilityState',
      detection: 'visibilityState' in document,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/page-visibility/' },
  ],
  icon: 'preview',
  routerLink: 'page-visibility'
};
export const PAYMENT_HANDLER: Technology = {
  name: 'Payment Handler API',
  description: 'Erlaubt es Webanwendungen, Zahlungsanfragen von Benutzern zu bearbeiten, sodass sie eigenständige Zahlungsanwendungen darstellen können.',
  featureDetections: [
    {
      apiObject: 'ServiceWorkerRegistration.paymentManager',
      detection: isObjectInServiceWorkerRegistration('paymentManager')
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/payment-handler/' },
  ],
  icon: 'account_balance_wallet',
  routerLink: 'payment-handler'
};
export const PAYMENT_REQUEST: Technology = {
  name: 'Payment Request API',
  description: 'Ermöglicht es Webseiten, die physische oder digitale Waren verkaufen, Zahlungsmethoden anzubieten und den Zahlungsfluss zwischen Händler und Zahler durch den Browser sicherzustellen.',
  featureDetections: [
    {
      apiObject: 'window.PaymentRequest',
      detection: 'PaymentRequest' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/payment-request/' },
  ],
  icon: 'payment',
  routerLink: 'payment-request'
};
export const PICTURE_IN_PICTURE: Technology = {
  name: 'Picture-in-Picture',
  description: 'Definiert APIs, um Medien im Bild-im-Bild-Format darzustellen, sodass sie vom Benutzer auch dann konsumiert werden können, während sie mit anderen Inhalten, Webseiten oder Anwendungen des Endgerätes interagieren.',
  featureDetections: [
    {
      apiObject: 'HTMLVideoElement.requestPictureInPicture()',
      detection: isObjectInHtmlElement('video', 'requestPictureInPicture'),
    },
    {
      apiObject: 'document.exitPictureInPicture()',
      detection: 'exitPictureInPicture' in document
    },
    {
      apiObject: 'document.pictureInPictureEnabled',
      detection: 'pictureInPictureEnabled' in document
    }
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/picture-in-picture/' },
  ],
  icon: 'picture_in_picture_alt',
  routerLink: 'picture-in-picture'
};
export const POINTER_EVENTS: Technology = {
  name: 'Pointer Events',
  description: 'Definiert Events und Schnittstellen für die Verarbeitung von Zeigereingaben durch Geräte wie Computermäuse, Stifte oder Touchscreens.',
  featureDetections: [
    {
      apiObject: 'window.PointerEvent',
      detection: 'PointerEvent' in window,
    },
    {
      apiObject: 'navigator.maxTouchPoints',
      detection: 'maxTouchPoints' in navigator,
    },
    {
      apiObject: 'Element.setPointerCapture()',
      detection: isObjectInHtmlElement('div', 'setPointerCapture'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/pointerevents2/' },
  ],
  icon: 'mouse',
  routerLink: 'pointer-events'
};
export const POINTER_LOCK: Technology = {
  name: 'Pointer Lock',
  description: 'Eine API, um die Darstellung des Maus-Cursors zu entfernen und diesen an ein bestimmtes Element zu binden.',
  featureDetections: [
    {
      apiObject: 'Element.requestPointerLock()',
      detection: isObjectInHtmlElement('div', 'requestPointerLock'),
    },
    {
      apiObject: 'document.exitPointerLock()',
      detection: 'exitPointerLock' in document
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/pointerlock/' },
  ],
  icon: 'center_focus_weak',
  routerLink: 'pointer-lock'
};
export const PRESENTATION: Technology = {
  name: 'Presentation API',
  description: 'Ermöglicht den Zugriff auf Präsentationsgeräte wie Projektoren, angeschlossene Monitore, netzwerkverbundene Fernsehgeräte oder sonstige Darstellungsgeräte in sowohl kabelgebundener als auch drahtloser Form. Ein Gerät kann dabei entweder Anfragen für Präsentationen selbst steuern oder entgegennehmen.',
  featureDetections: [
    {
      apiObject: 'navigator.presentation',
      detection: 'presentation' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/presentation-api/' },
  ],
  icon: 'cast',
  routerLink: 'presentation'
};
export const PROXIMITY_SENSOR: Technology = {
  name: 'Proximity Sensor',
  description: 'Die Webtechnologie ist eine Schnittstelle für den Zugriff auf Informationen eines gegebenenfalls verbauten Näherungssensors und erweitert die Generic Sensor API.',
  featureDetections: [
    {
      apiObject: 'window.ProximitySensor',
      detection: 'ProximitySensor' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/proximity/' },
    { name: 'Spezifikation (Generic Sensor API)', link: 'https://www.w3.org/TR/generic-sensor/'},
  ],
  icon: 'nearby_error',
  routerLink: 'proximity-sensor'
};
export const REMOTE_PLAYBACK: Technology = {
  name: 'Remote Playback API',
  description: 'Erlaubt die Fernwiedergabe von Medieninhalten einer Webseite.',
  featureDetections: [
    {
      apiObject: 'HTMLMediaElement.remote',
      detection: isObjectInHtmlElement('audio', 'remote'),
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/remote-playback/' },
  ],
  icon: 'cast',
  routerLink: 'remote-playback'
};
export const SCREEN_CAPTURE: Technology = {
  name: 'Screen Capture',
  description: 'Ermöglicht die Erfasung des Bildschirminhalts oder Teile von diesem.',
  featureDetections: [
    {
      apiObject: 'navigator.mediaDevices.getDisplayMedia()',
      detection: 'mediaDevices' in navigator && 'getDisplayMedia' in navigator.mediaDevices,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-capture/' },
  ],
  icon: 'screen_share',
  routerLink: 'screen-capture'
};
export const SCREEN_ORIENTATION: Technology = {
  name: 'Screen Orientation API',
  description: 'Ermöglicht es, den Typ und Winkel der aktuellen Bildschirmausrichtung eines Gerätes zurückzugeben und eine bestimmte Ausrichtung zu fixieren.',
  featureDetections: [
    {
      apiObject: 'window.screen.orientation',
      detection: 'screen' in window && 'orientation' in window.screen,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-orientation/' },
  ],
  icon: 'screen_lock_rotation',
  routerLink: 'screen-orientation'
};
export const SCREEN_WAKE_LOCK: Technology = {
  name: 'Screen Wake Lock API',
  description: 'Ermöglicht es, zu verhindern, dass der Bildschirm nach einer Zeit gesperrt wird bzw. der Bildschirmschoner einsetzt.',
  featureDetections: [
    {
      apiObject: 'navigator.wakeLock',
      detection: 'wakeLock' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/screen-wake-lock/' },
  ],
  icon: 'screen_lock_landscape',
  routerLink: 'screen-wake-lock'
};
export const SERVICE_WORKER: Technology = {
  name: 'Service Worker',
  description: 'Ermöglicht Hintergrundprozesse für Webanwendungen, die auch offline durchgeführt werden können. Dadurch ist es möglich, Inhalte in einem eigenen Cache zwischenzuspeichern, sodass verschiedene Caching-Strategien angewendet werden können und die Anwendung auch unabhängig von der Internetverbindung gestartet und ausgeführt werden kann.',
  featureDetections: [
    {
      apiObject: 'navigator.serviceWorker',
      detection: 'serviceWorker' in navigator
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/service-workers-1/' }
  ],
  icon: 'cloud_off',
  routerLink: 'service-worker'
};
export const SHAPE_DETECTION: Technology = {
  name: 'Shape Detection',
  description: 'Ermöglicht die Erkennung von Formen wie Gesichter, Barcodes oder QR-Codes in Bildern.',
  featureDetections: [
    {
      apiObject: 'window.FaceDetector',
      detection: 'FaceDetector' in window,
    },
    {
      apiObject: 'window.BarcodeDetector',
      detection: 'BarcodeDetector' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/shape-detection-api/' },
  ],
  icon: 'qr_code_scanner',
  routerLink: 'shape-detection'
};
export const STORAGE_STANDARD: Technology = {
  name: 'Storage Standard',
  description: 'Definiert ein gemeinsam genutztes Speichersystem, das von allen Web APIs verwendet werden soll, die auf Daten des Endgerätes zugreifen.',
  featureDetections: [
    {
      apiObject: 'navigator.storage',
      detection: 'storage' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://storage.spec.whatwg.org/' },
  ],
  icon: 'storage',
  routerLink: 'storage-standard'
};
export const TEXT_DETECTION: Technology = {
  name: 'Text Detection',
  description: 'Ermöglicht die Erkennung von Texten in Bildern.',
  featureDetections: [
    {
      apiObject: 'window.TextDetector',
      detection: 'TextDetector' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/shape-detection-api/text.html' },
  ],
  icon: 'document_scanner',
  routerLink: 'text-detection'
};
export const TOUCH_EVENTS: Technology = {
  name: 'Touch Events',
  description: 'Werden durch Berührungen auf einer berührungsempfindlichen Oberfläche (beispielsweise einem Touchscreen) ausgelöst.',
  featureDetections: [
    {
      apiObject: 'window.TouchEvent',
      detection: 'TouchEvent' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/touch-events/' },
  ],
  icon: 'touch_app',
  routerLink: 'touch-events'
};
export const VIBRATION: Technology = {
  name: 'Vibration API',
  description: 'Ermöglicht den Zugriff auf den Vibrationsmechanismus des Endgeräts.',
  featureDetections: [
    {
      apiObject: 'navigator.vibrate()',
      detection: 'vibrate' in navigator
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/vibration/' }
  ],
  icon: 'vibration',
  routerLink: 'vibration'
};
export const VIRTUALKEYBOARD: Technology = {
  name: 'VirtualKeyboard API',
  description: 'Ermöglicht eine bessere Kontrolle über die Sichtbarkeit der virtuellen Tastatur sowie der Anpassung des Layouts von Webseiten nach dessen Änderung.',
  featureDetections: [
    {
      apiObject: 'navigator.virtualKeyboard',
      detection: 'virtualKeyboard' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/editing/docs/virtualkeyboard/' },
  ],
  icon: 'keyboard_alt',
  routerLink: 'virtualkeyboard'
};
export const WEB_APP_MANIFEST: Technology = {
  name: 'Web App Manifest',
  description: 'Eine Webtechnologie, mit welcher eine Webseite gegenüber dem Browser als installierbare Anwendung kenntlich gemacht werden kann. Es ist eine auf JSON basierende Datei, welche Metadaten über die Webanwendung enthält und das Aussehen auf dem Homebildschirm, der Programmliste oder dem Desktop definiert, nachdem die Anwendung installiert wird.',
  featureDetections: [],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/appmanifest/' },
  ],
  icon: 'get_app',
  routerLink: 'web-app-manifest'
};
export const WEB_AUTHENTICATION: Technology = {
  name: 'Web Authentication',
  description: 'Ermöglicht die Erstellung und Verwendung von starken auf öffentliche Schlüssel basierende Anmeldeinformationen, um Benutzer zu authentifizieren.',
  featureDetections: [
    {
      apiObject: 'window.PublicKeyCredential',
      detection: 'PublicKeyCredential' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webauthn-2/' },
  ],
  icon: 'fingerprint',
  routerLink: 'web-authentication'
};
export const WEB_BLUETOOTH: Technology = {
  name: 'Web Bluetooth',
  description: 'Definiert eine Webtechnologie für den Zugriff auf Bluetoothfunktionalitäten und ermöglicht somit die Interaktion mit anderen bluetoothfähigen Geräten.',
  featureDetections: [
    {
      apiObject: 'navigator.bluetooth',
      detection: 'bluetooth' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://webbluetoothcg.github.io/web-bluetooth/' },
  ],
  icon: 'bluetooth',
  routerLink: 'web-bluetooth'
};
export const WEB_MIDI: Technology = {
  name: 'Web MIDI API',
  description: 'Ermöglicht Webanwendungen den Zugriff auf am Endgerät angeschlossene Geräte mit verbautem Musical Instrument Digital Interface (MIDI).',
  featureDetections: [
    {
      apiObject: 'navigator.requestMIDIAccess()',
      detection: 'requestMIDIAccess' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webmidi/' },
  ],
  icon: 'piano',
  routerLink: 'web-midi'
};
export const WEB_NFC: Technology = {
  name: 'Web NFC',
  description: 'Ermöglicht den Zugriff auf im Gerät verbaute Funktionalitäten über Near Field Communication (NFC), welche die drahtlose Kommunikation zwischen Geräten über kurze Distanzen erlaubt.',
  featureDetections: [
    {
      apiObject: 'window.NDEFReader',
      detection: 'NDEFReader' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://w3c.github.io/web-nfc/' },
  ],
  icon: 'nfc',
  routerLink: 'web-nfc'
};
export const WEB_SERIAL: Technology = {
  name: 'Web Serial API',
  description: 'Ermöglicht den Zugriff auf mit dem Endgerät verbundene serielle Geräte.',
  featureDetections: [
    {
      apiObject: 'navigator.serial',
      detection: 'serial' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/serial/' },
  ],
  icon: 'settings_input_hdmi',
  routerLink: 'web-serial'
};
export const WEB_SHARE: Technology = {
  name: 'Web Share API',
  description: 'Ermöglicht das Teilen von Inhalten mit beliebigen vom Benutzer ausgewählten Zielen, wie beispielsweise Anwendungen, Webseiten oder Kontakte.',
  featureDetections: [
    {
      apiObject: 'navigator.share()',
      detection: 'share' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/web-share/' },
  ],
  icon: 'share',
  routerLink: 'web-share'
};
export const WEB_SPEECH: Technology = {
  name: 'Web Speech API',
  description: 'Ermöglicht Spracheingabe- und Text-to-Speech-Funktionen, welche von der Spracherkennungs- und -syntheseimplementation der Ausführungsumgebung unabhängig sind.',
  featureDetections: [
    {
      apiObject: 'window.SpeechRecognition',
      detection: 'SpeechRecognition' in window,
    },
    {
      apiObject: 'window.speechSynthesis',
      detection: 'speechSynthesis' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/speech-api/' },
  ],
  icon: 'record_voice_over',
  routerLink: 'web-speech'
};
export const WEBHID: Technology = {
  name: 'WebHID API',
  description: 'Ermöglicht den Zugriff auf Geräte, welche das HID-Protokoll unterstützen. Ein Human Interface Device (HID) ist eine Geräteart, die Eingaben von Menschen engegennimmt oder Ausgaben für diese bereitstellt.',
  featureDetections: [
    {
      apiObject: 'navigator.hid',
      detection: 'hid' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/webhid/index.html' },
  ],
  icon: 'input',
  routerLink: 'webhid'
};
export const WEBOTP: Technology = {
  name: 'WebOTP API',
  description: 'Ermöglicht die Abfrage von Einmalpasswörtern (zunächst via SMS) zur Überprüfung von Anmeldedaten wie Telefonnummern oder E-Mails.',
  featureDetections: [
    {
      apiObject: 'window.OTPCredential',
      detection: 'OTPCredential' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/web-otp/' },
  ],
  icon: 'vpn_key',
  routerLink: 'webotp'
};
export const WEBUSB: Technology = {
  name: 'WebUSB API',
  description: 'Eine Webtechnologie für den Zugriff auf per USB angeschlossene Geräte.',
  featureDetections: [
    {
      apiObject: 'navigator.usb',
      detection: 'usb' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/webusb/' },
  ],
  icon: 'usb',
  routerLink: 'webusb'
};
export const WEBXR_DEVICE: Technology = {
  name: 'WebXR Device API',
  description: 'Die Spezifikation definiert Funktionen für Geräte im Kontext von Virtual Reality (VR) und Augmented Reality (AR).',
  featureDetections: [
    {
      apiObject: 'navigator.xr',
      detection: 'xr' in navigator,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/webxr/' },
  ],
  icon: 'view_in_ar',
  routerLink: 'webxr-device'
};

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
  technologies: [],
};

export const CAM_MIC_CAPTURE: Category = {
  title: 'Kamera, Mikrofon und Aufnahme',
  icon: 'perm_camera_mic',
  technologies: [],
};

export const INPUT_OUTPUT_DEVICES: Category = {
  title: 'Zugriff auf Eingabe- & Ausgabegeräte',
  icon: 'cable',
  technologies: [],
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

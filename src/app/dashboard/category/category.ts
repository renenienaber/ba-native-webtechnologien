import {Technology} from '../../technologies/technology';
import {ACCELEROMETER} from '../../technologies/sensors/accelerometer/accelerometer.component';
import {AMBIENT_LIGHT_SENSOR} from '../../technologies/sensors/ambient-light-sensor/ambient-light-sensor.component';
import {DEVICEORIENTATION_EVENT} from '../../technologies/sensors/deviceorientation-event/deviceorientation-event.component';
import {GEOLOCATION_API} from '../../technologies/sensors/geolocation/geolocation.component';
import {GEOLOCATION_SENSOR} from '../../technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import {GYROSCOPE} from '../../technologies/sensors/gyroscope/gyroscope.component';
import {MAGNETOMETER} from '../../technologies/sensors/magnetometer/magnetometer.component';
import {ORIENTATION_SENSOR} from '../../technologies/sensors/orientation-sensor/orientation-sensor.component';
import {PROXIMITY_SENSOR} from '../../technologies/sensors/proximity-sensor/proximity-sensor.component';

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
    GEOLOCATION_API,
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
  technologies: [],
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

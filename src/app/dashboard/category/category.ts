import {Technology} from '../../technologies/technology';

export interface Category {
  title: string;
  icon: string;
  technologies: Technology[];
}

export const SENSORS: Category = {
  title: 'Sensoren',
  icon: 'sensors',
  technologies: [],
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

import {
  CAM_MIC_CAPTURE,
  DEVICE_INFOS,
  FURTHER_HARDWARE_AND_PERIPHERAL, FURTHER_PLATFORM,
  INPUT_OUTPUT_DEVICES,
  INPUT_PROCESSING, LOCAL_RESOURCES, PLATFORM_UI,
  SCREEN,
  SENSORS
} from './category';

export interface Technology {
  name: string;
  description: string;
  references: Reference[];
  featureDetections: FeatureDetection[];
  icon: string;
  routerLink: string;
}

export interface Reference {
  name: string;
  link: string;
}

export interface FeatureDetection {
  apiObject: string;
  detection: boolean;
}

export const TECHNOLOGIES: Technology[] = [
  ...SENSORS.technologies,
  ...DEVICE_INFOS.technologies,
  ...SCREEN.technologies,
  ...CAM_MIC_CAPTURE.technologies,
  ...INPUT_OUTPUT_DEVICES.technologies,
  ...INPUT_PROCESSING.technologies,
  ...FURTHER_HARDWARE_AND_PERIPHERAL.technologies,
  ...LOCAL_RESOURCES.technologies,
  ...PLATFORM_UI.technologies,
  ...FURTHER_PLATFORM.technologies
].sort((a, b) => a.name.localeCompare(b.name));

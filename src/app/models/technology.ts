export interface Technology {
  name: string;
  description: string;
  references: Reference[];
  caniuseRef?: string;
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

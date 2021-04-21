export interface Technology {
  name: string;
  description: string;
  references: Reference[];
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

export const VIBRATION_API: Technology = {
  name: 'Vibration API',
  description: 'The Vibration API allows Web applications to use the device\'s built-in vibration, if one is present.',
  references: [
    { name: 'CanIUse', link: 'https://caniuse.com/vibration' },
    { name: 'Spec', link: 'https://w3c.github.io/vibration/' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API' },
  ],
  icon: 'vibration',
  routerLink: 'vibration-api'
};

export const GEOLOCATION_API: Technology = {
  name: 'Geolocation API',
  description: '',
  references: [],
  icon: 'place',
  routerLink: 'geolocation-api'
};

export const NOTIFICATION_API: Technology = {
  name: 'Notification API',
  description: '',
  references: [],
  icon: 'notifications',
  routerLink: 'notification-api'
};

export const PUSH_API: Technology = {
  name: 'Push API',
  description: '',
  references: [],
  icon: 'tap_and_play',
  routerLink: 'push-api'
};

export const TECHNOLOGIES: Technology[] = [
  VIBRATION_API, GEOLOCATION_API, NOTIFICATION_API, PUSH_API
];

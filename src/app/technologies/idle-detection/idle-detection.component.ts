import { Component } from '@angular/core';
import {Technology} from '../technology';
import {TechnologyComponent} from '../technology.component';

@Component({
  selector: 'app-idle-detection',
  templateUrl: './idle-detection.component.html'
})
export class IdleDetectionComponent extends TechnologyComponent {
  technology: Technology = IDLE_DETECTION;
}

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

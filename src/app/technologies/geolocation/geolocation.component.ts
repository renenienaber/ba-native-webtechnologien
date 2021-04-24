import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {FeatureDetection, Technology} from '../technology';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent extends TechnologyComponent {
  technology: Technology = GEOLOCATION_API;
  featureDetections: FeatureDetection[] = [
    {
      apiObject: 'navigator.geolocation',
      detection: 'geolocation' in navigator
    }
  ];

  private errorNoGeolocation = 'navigator.geolocation wird nicht unterstützt!';

  currentPos: Position;
  getCurrentPos(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.currentPos = pos;
      });
    } else {
      this.showError(this.errorNoGeolocation);
    }
  }
}

export const GEOLOCATION_API: Technology = {
  name: 'Geolocation API',
  description: 'Erlaubt authorisierten Webanwendungen den Zugriff auf Standortdaten des Gerätes durch GPS oder das Netzwerk.',
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/geolocation-API/' },
    { name: 'CanIUse', link: 'https://caniuse.com/geolocation' },
    { name: 'Mozilla Developer Network', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API' },
  ],
  icon: 'place',
  routerLink: 'geolocation-api'
};

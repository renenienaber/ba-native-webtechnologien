import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-indexed-database',
  templateUrl: './indexed-database.component.html'
})
export class IndexedDatabaseComponent extends TechnologyComponent {
  technology: Technology = INDEXED_DATABASE;
}

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

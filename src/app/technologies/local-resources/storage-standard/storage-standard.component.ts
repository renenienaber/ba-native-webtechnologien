import { Component } from '@angular/core';
import {Technology} from '../../technology';
import {TechnologyComponent} from '../../technology.component';

@Component({
  selector: 'app-storage-standard',
  templateUrl: './storage-standard.component.html'
})
export class StorageStandardComponent extends TechnologyComponent {
  technology: Technology = STORAGE_STANDARD;
}

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

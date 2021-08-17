import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../technology';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html'
})
export class FileComponent extends TechnologyComponent {
  technology: Technology = FILE;
}

export const FILE: Technology = {
  name: 'File API',
  description: 'Spezifiziert die Umsetzung von Dateiobjekten in Webanwendungen sowie deren Auswahl und Zugriff.',
  featureDetections: [
    {
      apiObject: 'window.FileReader',
      detection: 'FileReader' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://www.w3.org/TR/FileAPI/' },
  ],
  icon: 'file_present',
  routerLink: 'file'
};

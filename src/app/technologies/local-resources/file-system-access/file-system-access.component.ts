import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../technology';

@Component({
  selector: 'app-file-system-access',
  templateUrl: './file-system-access.component.html'
})
export class FileSystemAccessComponent extends TechnologyComponent {
  technology: Technology = FILE_SYSTEM_ACCESS;
}

export const FILE_SYSTEM_ACCESS: Technology = {
  name: 'File System Access',
  description: 'Definiert eine API, um in Webanwendungen die Interaktion mit Dateien des Endgerätes zu ermöglichen.',
  featureDetections: [
    {
      apiObject: 'window.showOpenFilePicker()',
      detection: 'showOpenFilePicker' in window,
    },
    {
      apiObject: 'window.showSaveFilePicker()',
      detection: 'showSaveFilePicker' in window,
    },
    {
      apiObject: 'window.showDirectoryPicker()',
      detection: 'showDirectoryPicker' in window,
    },
  ],
  references: [
    { name: 'Spezifikation', link: 'https://wicg.github.io/file-system-access/' },
  ],
  icon: 'snippet_folder',
  routerLink: 'file-system-access'
};

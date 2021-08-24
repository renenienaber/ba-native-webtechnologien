import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-file-system-access',
  templateUrl: './file-system-access.component.html'
})
export class FileSystemAccessComponent extends TechnologyDemoComponent {
  editor = 'Dies ist ein Textinhalt.';

  onShowOpenFilePicker(): void {
    if ('showOpenFilePicker' in window) {
      // @ts-ignore
      window.showOpenFilePicker()
        .then(res => res[0])
        .then(fileHandle => fileHandle.getFile())
        .then(file => file.text())
        .then(contents => this.editor = contents)
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.showOpenFilePicker()');
    }
  }

  onShowSaveFilePicker(): void {
    if ('showSaveFilePicker' in window) {
      const options = {
        types: [{
          description: 'Textdateien',
          accept: {'text/plain' : ['.txt']}
        }]
      };
      // @ts-ignore
      window.showSaveFilePicker(options)
        .then(handle => handle.createWritable())
        .then(writable => {
          writable.write(this.editor)
            .then(() => writable.close());
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.showSaveFilePicker()');
    }
  }

  onShowDirectoryPicker(): void {
    if ('showDirectoryPicker' in window) {
      // @ts-ignore
      window.showDirectoryPicker()
        .then(dirHandle => dirHandle.getFileHandle('File System Access Demo.txt', { create: true }))
        .then(handle => handle.createWritable())
        .then(writable => {
          writable.write(this.editor)
            .then(() => writable.close());
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('window.showDirectoryPicker()');
    }
  }
}

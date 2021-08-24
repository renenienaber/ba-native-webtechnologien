import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html'
})
export class FileComponent extends TechnologyDemoComponent {
  fileList;
  result;

  onFileInputChanged(eventTarget: any): void {
    this.fileList = undefined;
    this.result = undefined;
    if (eventTarget.files.length > 0) {
      this.fileList = eventTarget.files;
      this.updateResult();
    }
  }

  private updateResult(): void {
    const file: File = this.fileList[0];
    const textType = /text.*/;

    if (file.type.match(textType)) {
      if ('FileReader' in window) {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = () => this.result = fileReader.result;
      } else {
        this.showNoSupportError('window.FileReader');
      }
    }
  }
}

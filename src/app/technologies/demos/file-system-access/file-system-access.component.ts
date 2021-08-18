import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {FILE_SYSTEM_ACCESS} from '../../technologies';

@Component({
  selector: 'app-file-system-access',
  templateUrl: './file-system-access.component.html'
})
export class FileSystemAccessComponent extends TechnologyComponent {
  technology: Technology = FILE_SYSTEM_ACCESS;
}

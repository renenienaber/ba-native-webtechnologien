import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {FILE} from '../../technologies';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html'
})
export class FileComponent extends TechnologyComponent {
  technology: Technology = FILE;
}

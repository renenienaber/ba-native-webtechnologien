import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {STORAGE_STANDARD} from '../technologies';

@Component({
  selector: 'app-storage-standard',
  templateUrl: './storage-standard.component.html'
})
export class StorageStandardComponent extends TechnologyComponent {
  technology: Technology = STORAGE_STANDARD;
}


import { Component } from '@angular/core';
import {TechnologyComponent} from '../../technology.component';
import {Technology} from '../../../models/technology';
import {INDEXED_DATABASE} from '../../technologies';

@Component({
  selector: 'app-indexed-database',
  templateUrl: './indexed-database.component.html'
})
export class IndexedDatabaseComponent extends TechnologyComponent {
  technology: Technology = INDEXED_DATABASE;
}

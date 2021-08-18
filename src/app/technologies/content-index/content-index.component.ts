import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {CONTENT_INDEX} from '../technologies';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html'
})
export class ContentIndexComponent extends TechnologyComponent {
  technology: Technology = CONTENT_INDEX;
}

import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {PAGE_VISIBILITY} from '../../technologies';

@Component({
  selector: 'app-page-visibility',
  templateUrl: './page-visibility.component.html'
})
export class PageVisibilityComponent extends TechnologyComponent {
  technology: Technology = PAGE_VISIBILITY;
}

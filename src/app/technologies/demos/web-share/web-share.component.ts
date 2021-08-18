import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_SHARE} from '../../technologies';

@Component({
  selector: 'app-web-share',
  templateUrl: './web-share.component.html'
})
export class WebShareComponent extends TechnologyComponent {
  technology: Technology = WEB_SHARE;
}

import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {LOCAL_FONT_ACCESS} from '../technologies';

@Component({
  selector: 'app-local-font-access',
  templateUrl: './local-font-access.component.html'
})
export class LocalFontAccessComponent extends TechnologyComponent {
  technology: Technology = LOCAL_FONT_ACCESS;
}


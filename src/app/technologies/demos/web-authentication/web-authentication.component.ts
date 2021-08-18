import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_AUTHENTICATION} from '../../technologies';

@Component({
  selector: 'app-web-authentication',
  templateUrl: './web-authentication.component.html'
})
export class WebAuthenticationComponent extends TechnologyComponent {
  technology: Technology = WEB_AUTHENTICATION;
}

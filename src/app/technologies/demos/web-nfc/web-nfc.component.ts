import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {WEB_NFC} from '../../technologies';

@Component({
  selector: 'app-web-nfc',
  templateUrl: './web-nfc.component.html'
})
export class WebNfcComponent extends TechnologyComponent {
  technology: Technology = WEB_NFC;
}

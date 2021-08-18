import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {CLIPBOARD} from '../technologies';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html'
})
export class ClipboardComponent extends TechnologyComponent {
  technology: Technology = CLIPBOARD;
}

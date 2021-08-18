import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {VIRTUALKEYBOARD} from '../../technologies';

@Component({
  selector: 'app-virtualkeyboard',
  templateUrl: './virtualkeyboard.component.html',
})
export class VirtualkeyboardComponent extends TechnologyComponent {
  technology: Technology = VIRTUALKEYBOARD;
}

import { Component } from '@angular/core';
import {TechnologyComponent} from '../technology.component';
import {Technology} from '../../models/technology';
import {PRESENTATION} from '../technologies';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
})
export class PresentationComponent extends TechnologyComponent {
  technology: Technology = PRESENTATION;
}

import { Component } from '@angular/core';
import {Technology} from '../../models/technology';
import {TechnologyComponent} from '../technology.component';
import {TEXT_DETECTION} from '../technologies';

@Component({
  selector: 'app-text-detection',
  templateUrl: './text-detection.component.html',
})
export class TextDetectionComponent extends TechnologyComponent {
  technology: Technology = TEXT_DETECTION;
}

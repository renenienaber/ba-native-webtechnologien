import { Component } from '@angular/core';
import {Technology} from '../../../models/technology';
import {TechnologyComponent} from '../../technology.component';
import {SHAPE_DETECTION} from '../../technologies';

@Component({
  selector: 'app-shape-detection',
  templateUrl: './shape-detection.component.html'
})
export class ShapeDetectionComponent extends TechnologyComponent {
  technology: Technology = SHAPE_DETECTION;
}

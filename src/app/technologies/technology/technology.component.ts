import {Component, Input} from '@angular/core';
import {FeatureDetection, Technology} from '../technology';

@Component({
  selector: 'app-technology',
  template: '',
})
export abstract class TechnologyComponent {
  @Input()
  shortVersion!: boolean;
  abstract technology: Technology;
  abstract featureDetections: FeatureDetection[];
}

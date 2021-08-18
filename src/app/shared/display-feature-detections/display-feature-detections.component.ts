import {Component, Input} from '@angular/core';
import {FeatureDetection} from '../../models/technology';

@Component({
  selector: 'app-display-feature-detections',
  templateUrl: './display-feature-detections.component.html',
  styleUrls: ['./display-feature-detections.component.css']
})
export class DisplayFeatureDetectionsComponent {
  @Input()
  featureDetections!: FeatureDetection[];
}

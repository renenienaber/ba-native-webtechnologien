import {Component, Input} from '@angular/core';
import {FeatureDetection, Technology} from '../technologies/technology';

@Component({
  selector: 'app-demo-frame',
  templateUrl: './demo-frame.component.html',
  styleUrls: ['./demo-frame.component.css']
})
export class DemoFrameComponent {
  @Input()
  technology!: Technology;
  @Input()
  featureDetections!: FeatureDetection[];
  @Input()
  shortVersion!: boolean;
}

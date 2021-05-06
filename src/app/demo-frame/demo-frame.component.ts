import {Component, Input} from '@angular/core';
import {FeatureDetection, Technology} from '../technologies/technology';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private matSnackBar: MatSnackBar) {}

  openErrorSnackBar(message: string) {
    this.matSnackBar.open(message, 'Verstanden');
  }
}

import {Component, Input, ViewChild} from '@angular/core';
import {FeatureDetection, Technology} from './technology';
import {DemoFrameComponent} from '../demo-frame/demo-frame.component';

@Component({
  selector: 'app-technology',
  template: '',
})
export abstract class TechnologyComponent {
  @ViewChild(DemoFrameComponent, { static: false })
  private demoFrameComponent: DemoFrameComponent;

  @Input()
  shortVersion!: boolean;

  abstract technology: Technology;
  abstract featureDetections: FeatureDetection[];

  showError(message: string): void {
    this.demoFrameComponent.openErrorSnackBar(message);
  }
}

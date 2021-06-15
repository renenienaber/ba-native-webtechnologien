import {FeatureDetection, Technology} from './technology';
import {Component, ViewChild} from '@angular/core';
import {DemoFrameComponent} from '../demo-frame/demo-frame.component';

@Component({
  selector: 'app-technology',
  template: '',
})
export abstract class TechnologyComponent {
  @ViewChild(DemoFrameComponent, { static: false })
  private demoFrameComponent: DemoFrameComponent;

  abstract technology: Technology;
  abstract featureDetections: FeatureDetection[];

  showError(message: string): void {
    this.demoFrameComponent.openErrorSnackBar(message);
  }
}

import {Component, ViewChild} from '@angular/core';
import {Technology} from './technology';
import {DemoFrameComponent} from '../demo-frame/demo-frame.component';

@Component({
  selector: 'app-technology',
  template: '',
})
export abstract class TechnologyComponent {
  @ViewChild(DemoFrameComponent, { static: false })
  private demoFrameComponent: DemoFrameComponent;

  abstract technology: Technology;

  showError(message: string): void {
    this.demoFrameComponent.openErrorSnackBar(message);
  }

  showNoSupportError(object: string): void {
    this.showError(`${object} wird nicht unterstützt!`);
  }
}

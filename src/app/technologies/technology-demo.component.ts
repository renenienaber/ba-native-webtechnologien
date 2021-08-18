import {Component, ViewChild} from '@angular/core';
import {TechnologyPageComponent} from './technology-page/technology-page.component';

@Component({
  template: '',
})
export abstract class TechnologyDemoComponent {
  @ViewChild(TechnologyPageComponent, { static: false })
  private technologyPageComponent: TechnologyPageComponent;

  showError(message: string): void {
    this.technologyPageComponent.openErrorSnackBar(message);
  }

  showNoSupportError(object: string): void {
    this.showError(`${object} wird nicht unterstützt!`);
  }
}

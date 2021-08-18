import {Component, ViewChild} from '@angular/core';
import {Technology} from '../models/technology';
import {TechnologyPageComponent} from './technology-page/technology-page.component';

@Component({
  selector: 'app-technology',
  template: '',
})
export abstract class TechnologyComponent {
  @ViewChild(TechnologyPageComponent, { static: false })
  private technologyInformationComponent: TechnologyPageComponent;

  abstract technology: Technology;

  showError(message: string): void {
    this.technologyInformationComponent.openErrorSnackBar(message);
  }

  showNoSupportError(object: string): void {
    this.showError(`${object} wird nicht unterstützt!`);
  }
}

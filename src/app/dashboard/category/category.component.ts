import {Component, Input} from '@angular/core';
import {Technology} from '../../technologies/technology';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input()
  title!: string;
  @Input()
  icon: string;
  @Input()
  technologies!: Technology[];

  getCompatibleFeaturesCount(technology: Technology): number {
    return technology.featureDetections.map(det => det.detection).filter(Boolean).length;
  }

  getRightIcon(technology: Technology): string {
    if (technology.featureDetections.length > 0) {
      return this.getCompatibleFeaturesCount(technology) > 0 ? 'check' : 'error_outline';
    }
    return 'report_off';
  }

}

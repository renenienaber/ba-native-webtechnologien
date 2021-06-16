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
    return technology.featureDetections.filter(Boolean).length;
  }

  getCompatibleFeaturesPercentage(technology: Technology): number {
    const detections = technology.featureDetections;
    if (detections.length > 0) {
      return (this.getCompatibleFeaturesCount(technology) / detections.length) * 100;
    }
    return 0;
  }

  getRightIcon(technology: Technology): string {
    if (technology.featureDetections.length > 0) {
      return this.getCompatibleFeaturesCount(technology) > 0 ? 'check_circle_outline' : 'error_outline';
    }
    return 'help_outline';
  }

}

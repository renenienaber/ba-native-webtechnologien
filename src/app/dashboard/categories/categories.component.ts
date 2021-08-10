import {Component, Input} from '@angular/core';
import {CATEGORIES, Category} from './category';
import {Technology} from '../../technologies/technology';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input()
  showCompatibility = false;
  @Input()
  showReferences = false;

  categories: Category[] = CATEGORIES;

  getCompatibleFeaturesCount(technology: Technology): number {
    return technology.featureDetections.map(det => det.detection).filter(Boolean).length;
  }

  getRightIcon(technology: Technology): string {
    if (technology.featureDetections.length > 0) {
      return this.getCompatibleFeaturesCount(technology) > 0 ? 'check' : 'error_outline';
    }
    return 'report_off';
  }

  getRightColor(technology: Technology): string {
    const detections = technology.featureDetections.length;
    if (detections > 0) {
      const supported = this.getCompatibleFeaturesCount(technology);
      return supported === 0 ? 'no' : supported === detections ? 'yes' : 'partially';
    }
    return '';
  }
}

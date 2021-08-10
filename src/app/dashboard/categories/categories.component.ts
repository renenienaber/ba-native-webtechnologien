import { Component } from '@angular/core';
import {CATEGORIES, Category} from './category';
import {Technology} from '../../technologies/technology';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
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
}

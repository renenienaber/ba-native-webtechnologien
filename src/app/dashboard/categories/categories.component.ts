import {Component, Input} from '@angular/core';
import {Category} from '../../models/category';
import {Technology} from '../../models/technology';
import {CATEGORIES} from './categories';
import {searchInTechnologies} from '../../shared/functions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input()
  showCompatibility = false;
  @Input()
  showDescription = false;
  @Input()
  showReferences = false;
  @Input()
  set searchTerm(value: string) {
    this.categories = value.length > 1 ? this.search(value) : CATEGORIES;
  }

  categories: Category[] = CATEGORIES;

  private search(term: string): Category[] {
    const categories: Category[] = [];
    for (const category of CATEGORIES) {
      const tempCategory: Category = {...category, technologies: searchInTechnologies(category.technologies, term)};
      if (tempCategory.technologies.length > 0) {
        categories.push(tempCategory);
      }
    }
    return categories;
  }

  getCompatibleFeaturesCount(technology: Technology): number {
    return technology.featureDetections.map(det => det.detection).filter(Boolean).length;
  }

  getClassByDetections(technology: Technology): string {
    const detections = technology.featureDetections.length;
    if (detections > 0) {
      const supported = this.getCompatibleFeaturesCount(technology);
      return supported === 0 ? 'no' : supported === detections ? 'yes' : 'partially';
    }
    return '';
  }
}

import {Component, Input, OnInit} from '@angular/core';
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
  @Input()
  set searchTerm(value: string) {
    if (value !== '') {
      this.categories = this.search(value);
    } else {
      this.categories = CATEGORIES;
    }
  }

  categories: Category[] = CATEGORIES;

  search(term: string): Category[] {
    term = term.toLowerCase();

    const categories: Category[] = [];
    for (const category of CATEGORIES) {
      const tempCategory: Category = {...category, technologies: []};
      for (const technology of category.technologies) {
        if (technology.name.toLowerCase().indexOf(term) !== -1 ||
          technology.description.toLowerCase().indexOf(term) !== -1 ||
          technology.featureDetections.filter(el => el.apiObject.toLowerCase().indexOf(term) !== -1).length > 0
        ) {
          tempCategory.technologies.push(technology);
        }
      }
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

import {Component, Input} from '@angular/core';
import {Category} from '../../models/category';
import {Technology} from '../../models/technology';
import {CATEGORIES} from './categories';
import {searchInTechnologies} from '../../shared/functions';
import {isDemo} from '../../technologies/technologies.module';

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
    this.filteredCategories = this.getDemosInCategories(this.categories);
  }
  @Input()
  demoOnly = false;

  categories: Category[] = CATEGORIES;
  filteredCategories: Category[] = this.getDemosInCategories(CATEGORIES);

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

  getDemosInCategories(categories: Category[]): Category[] {
    return categories
      .map(c => ({...c, technologies: c.technologies.filter(t => isDemo(t))}))
      .filter(c => c.technologies.length > 0);
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
    return 'untestable';
  }
}

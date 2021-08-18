import * as AllTechnologies from '../technologies/technologies';
import {Technology} from '../models/technology';

export const TECHNOLOGIES: Technology[] = Object.values(AllTechnologies) as Technology[];

export function searchInTechnologies(technologies: Technology[], searchTerm: string): Technology[] {
  searchTerm = searchTerm.toLowerCase();
  const tempTechnologies: Technology[] = [];
  for (const technology of technologies) {
    if (technology.name.toLowerCase().indexOf(searchTerm) !== -1 ||
      technology.description.toLowerCase().indexOf(searchTerm) !== -1 ||
      technology.featureDetections.filter(el => el.apiObject.toLowerCase().indexOf(searchTerm) !== -1).length > 0
    ) {
      tempTechnologies.push(technology);
    }
  }
  return tempTechnologies;
}

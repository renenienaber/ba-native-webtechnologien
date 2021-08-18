import * as AllTechnologies from '../technologies/technologies';
import {Technology} from '../models/technology';

export const TECHNOLOGIES: Technology[] = Object.values(AllTechnologies) as Technology[];

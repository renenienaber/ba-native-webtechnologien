import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {searchInTechnologies, TECHNOLOGIES} from '../shared/functions';
import {Category} from '../models/category';
import {CATEGORIES} from '../dashboard/categories/categories';
import {Technology} from '../models/technology';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  TECHNOLOGIES = TECHNOLOGIES;

  searchTerm = '';

  constructor(private breakpointObserver: BreakpointObserver) {}

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onSearchTermChange(): void {
    this.TECHNOLOGIES = this.searchTerm.length > 1 ? this.search(this.searchTerm) : TECHNOLOGIES;
    console.log(this.TECHNOLOGIES);
  }

  search(term: string): Technology[] {
    return searchInTechnologies(TECHNOLOGIES, term);
  }
}

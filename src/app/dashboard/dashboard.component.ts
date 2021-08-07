import { Component } from '@angular/core';
import {Category, CATEGORY_BASIC_PWA, CATEGORY_REST} from './category/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = [
    CATEGORY_BASIC_PWA,
    CATEGORY_REST,
  ];
}

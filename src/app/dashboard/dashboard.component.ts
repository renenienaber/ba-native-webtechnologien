import { Component } from '@angular/core';
import {FeatureExportService} from './feature-export.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private featureExportService: FeatureExportService) {}

  showCompatibility = false;

  exportTechnologySupport(): void {
    this.featureExportService.exportTechnologySupport();
  }
}

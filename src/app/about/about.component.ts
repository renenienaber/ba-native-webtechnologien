import { Component } from '@angular/core';
import {FeatureExportService} from '../dashboard/feature-export.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private readonly featureExportService: FeatureExportService) {}

  exportTechnologySupport(): void {
    this.featureExportService.exportTechnologySupport();
  }
}

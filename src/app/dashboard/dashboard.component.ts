import { Component } from '@angular/core';
import {FeatureExportService} from './feature-export.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardSettings: DashboardSettings = {
    showCompatibility: false,
    showDescription: false,
    showReferences: false
  };
  searchTerm = '';
  demoOnly = false;

  constructor(private readonly featureExportService: FeatureExportService) {
    const storedSettings = JSON.parse(localStorage.getItem('dashboardSettings'));
    if (storedSettings) {
      this.dashboardSettings = storedSettings;
    }
    const sessionStoredSettings = JSON.parse(sessionStorage.getItem('demoOnly'));
    if (sessionStoredSettings) {
      this.demoOnly = sessionStoredSettings;
    }
  }

  onSettingsChanged(): void {
    localStorage.setItem('dashboardSettings', JSON.stringify(this.dashboardSettings));
  }

  onFilterChanged(): void {
    sessionStorage.setItem('demoOnly', JSON.stringify(this.demoOnly));
  }

  exportTechnologySupport(): void {
    this.featureExportService.exportTechnologySupport();
  }
}

interface DashboardSettings {
  showCompatibility: boolean;
  showDescription: boolean;
  showReferences: boolean;
}

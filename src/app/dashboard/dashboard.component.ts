import { Component } from '@angular/core';

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

  constructor() {
    const storedSettings = JSON.parse(localStorage.getItem('dashboardSettings'));
    if (storedSettings) {
      this.dashboardSettings = storedSettings;
    }
  }

  onSettingsChanged(): void {
    localStorage.setItem('dashboardSettings', JSON.stringify(this.dashboardSettings));
  }
}

interface DashboardSettings {
  showCompatibility: boolean;
  showDescription: boolean;
  showReferences: boolean;
}

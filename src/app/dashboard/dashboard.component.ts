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
}

interface DashboardSettings {
  showCompatibility: boolean;
  showDescription: boolean;
  showReferences: boolean;
}

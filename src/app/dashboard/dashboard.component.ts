import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showCompatibility = false;
  showDescription = false;
  showReferences = false;
  searchTerm = '';

  constructor() {
    this.showCompatibility = this.getBooleanLocalStorageValue('settingCompatibility');
    this.showDescription = this.getBooleanLocalStorageValue('settingDescription');
    this.showReferences = this.getBooleanLocalStorageValue('settingReferences');
  }

  onSettingsChanged(): void {
    localStorage.setItem('settingCompatibility', `${this.showCompatibility}`);
    localStorage.setItem('settingDescription', `${this.showDescription}`);
    localStorage.setItem('settingReferences', `${this.showReferences}`);
  }

  private getBooleanLocalStorageValue(key: string): boolean {
    return JSON.parse(localStorage.getItem(key)) === true;
  }
}

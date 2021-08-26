import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-storage-standard',
  templateUrl: './storage-standard.component.html'
})
export class StorageStandardComponent extends TechnologyDemoComponent {
  storageData: StorageData = {};

  getStorageManagerData(): void {
    if ('storage' in navigator) {
      navigator.storage.persisted()
        .then(res => this.storageData.persisted = res)
        .catch(err => this.showError(err));
      navigator.storage.persist()
        .then(res => this.storageData.persist = res)
        .catch(err => this.showError(err));
      navigator.storage.estimate()
        .then(res => {
          this.storageData.estimate = { usage: undefined, quota: undefined };
          this.storageData.estimate.usage = res.usage;
          this.storageData.estimate.quota = res.quota;
        })
        .catch(err => this.showError(err));
    } else {
      this.showNoSupportError('navigator.storage');
    }
  }
}

interface StorageData {
  persisted?: boolean;
  persist?: boolean;
  estimate?: { usage: number, quota: number };
}

import { Component } from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-indexed-database',
  templateUrl: './indexed-database.component.html'
})
export class IndexedDatabaseComponent extends TechnologyDemoComponent {
  INDEXED_DB_NAME = 'indexed_db-demo_db';
  OBJECT_STORE_NAME = 'indexed_db-demo_os';

  database: IDBDatabase;
  newEntry = '';
  results = [];

  isSupported(): boolean {
    if ('indexedDB' in window) {
      return true;
    } else {
      this.showNoSupportError('window.indexedDB');
      return false;
    }
  }

  open(): void {
    if (this.isSupported()) {
      const request = indexedDB.open(this.INDEXED_DB_NAME);
      request.addEventListener('upgradeneeded', e => this.setupTable(e));
      request.addEventListener('success', () => {
        this.database = request.result;
        this.updateResults();
      });
    }
  }

  private setupTable(e: any) {
    const db = e.target.result as IDBDatabase;
    const objectStore = db.createObjectStore(this.OBJECT_STORE_NAME, { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('entry', 'entry', { unique: false });
  }

  addEntry(): void {
    if (this.isSupported()) {
      const transaction = this.database.transaction([this.OBJECT_STORE_NAME], 'readwrite');
      const objectStore = transaction.objectStore(this.OBJECT_STORE_NAME);

      const request = objectStore.add({ entry: this.newEntry });
      request.addEventListener('success', () => {
        this.newEntry = '';
        this.updateResults();
      });
    }
  }

  removeEntry(valueId: number): void {
    const transaction = this.database.transaction([this.OBJECT_STORE_NAME], 'readwrite');
    const objectStore = transaction.objectStore(this.OBJECT_STORE_NAME);

    const request = objectStore.delete(valueId);

    transaction.addEventListener('complete', () => {
      this.updateResults();
    });
  }

  private updateResults(): void {
    const objectStore = this.database.transaction(this.OBJECT_STORE_NAME).objectStore(this.OBJECT_STORE_NAME);
    this.results = [];
    objectStore.openCursor().addEventListener('success', e => {
      // @ts-ignore
      const cursor = e.target.result;
      if (cursor) {
        this.results.push({
          id: cursor.value.id,
          entry: cursor.value.entry
        });
        cursor.continue();
      }
    });
  }
}

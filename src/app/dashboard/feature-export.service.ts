import { Injectable } from '@angular/core';
import {Technology} from '../models/technology';
import * as TECHNOLOGIES from '../technologies/technologies'

@Injectable({
  providedIn: 'root'
})
export class FeatureExportService {
  private exportToCsv(filename: string, rows: object[]) {
    if (!rows || !rows.length) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  exportTechnologySupport(): void {
    const rows = [];
    for (const technology of Object.values(TECHNOLOGIES) as Technology[]) {
      let row = [];
      let partially = false;

      const detectionCount = technology.featureDetections.length;
      const supportedCount = technology.featureDetections.map(det => det.detection).filter(Boolean).length;
      if (detectionCount === 0) {
        row.push(technology.name, '?');
      } else {
        if (supportedCount === 0) {
          row.push(technology.name, '-');
        } else if (supportedCount === detectionCount) {
          row.push(technology.name, '+');
        } else {
          partially = true;
        }
      }
      if (partially) {
        for (const detection of technology.featureDetections) {
          row.push(`${technology.name}: ${detection.apiObject}`, detection.detection ? '+' : '-');
          rows.push(row);
          row = [];
        }
      } else {
        rows.push(row);
      }
    }
    this.exportToCsv('test.csv', rows);
  }
}

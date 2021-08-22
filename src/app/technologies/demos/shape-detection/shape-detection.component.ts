import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-shape-detection',
  templateUrl: './shape-detection.component.html',
  styleUrls: ['./shape-detection.component.css']
})
export class ShapeDetectionComponent extends TechnologyDemoComponent {
  @ViewChild('barcodeImgElement', { static: false })
  set barcodeImgRef(ref: ElementRef<HTMLImageElement>) {
    this.barcodeImgElement = ref.nativeElement;
  }
  @ViewChild('faceImgElement', { static: false })
  set faceImgRef(ref: ElementRef<HTMLImageElement>) {
    this.faceImgElement = ref.nativeElement;
  }

  barcodeImgElement: HTMLImageElement;
  faceImgElement: HTMLImageElement;

  barcodeResults;
  faceResults;

  detectBarcode(): void {
    if ('BarcodeDetector' in window) {
      // @ts-ignore
      const barcodeDetector = new BarcodeDetector();
      // @ts-ignore
      if ('detect' in barcodeDetector) {
        barcodeDetector.detect(this.barcodeImgElement)
          .then(res => this.barcodeResults = res)
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('BarcodeDetector.detect()');
      }
    } else {
      this.showNoSupportError('window.BarcodeDetector');
    }
  }

  detectFaces(): void {
    if ('FaceDetector' in window) {
      // @ts-ignore
      const faceDetector = new FaceDetector();
      // @ts-ignore
      if ('detect' in faceDetector) {
        faceDetector.detect(this.faceImgElement)
          .then(res => this.faceResults = res)
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('FaceDetector.detect()');
      }
    } else {
      this.showNoSupportError('window.FaceDetector');
    }
  }
}

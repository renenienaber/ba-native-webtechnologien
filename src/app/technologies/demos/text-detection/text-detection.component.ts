import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-text-detection',
  templateUrl: './text-detection.component.html',
  styleUrls: ['./text-detection.component.css']
})
export class TextDetectionComponent extends TechnologyDemoComponent {
  @ViewChild('textImgElement', { static: false })
  set textImgRef(ref: ElementRef<HTMLImageElement>) {
    this.textImgElement = ref.nativeElement;
  }
  textImgElement: HTMLImageElement;

  results;

  detectText(): void {
    if ('TextDetector' in window) {
      // @ts-ignore
      const textDetector = new TextDetector();
      // @ts-ignore
      if ('detect' in textDetector) {
        textDetector.detect(this.textImgElement)
          .then(res => this.results = res)
          .catch(err => this.showError(err));
      } else {
        this.showNoSupportError('TextDetector.detect()');
      }
    } else {
      this.showNoSupportError('window.TextDetector');
    }
  }
}

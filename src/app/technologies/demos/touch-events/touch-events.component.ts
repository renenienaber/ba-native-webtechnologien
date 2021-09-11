import {Component, ElementRef, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';

@Component({
  selector: 'app-touch-events',
  templateUrl: './touch-events.component.html'
})
export class TouchEventsComponent extends TechnologyDemoComponent {
  @ViewChild('buttonElement', { static: false })
  set buttonRef(ref: ElementRef<HTMLButtonElement>) {
    this.buttonElement = ref.nativeElement;
  }
  private buttonElement: HTMLButtonElement;

  results = '';

  onTouchEvent(eventName: string): void {
    this.results = eventName + '\n' + this.results;
  }
}

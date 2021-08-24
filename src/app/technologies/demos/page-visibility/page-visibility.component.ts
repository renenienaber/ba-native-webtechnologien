import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-page-visibility',
  templateUrl: './page-visibility.component.html'
})
export class PageVisibilityComponent extends TechnologyDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('audioElement', { static: false })
  set audioRef(ref: ElementRef<HTMLAudioElement>) {
    this.audioElement = ref.nativeElement;
  }
  private audioElement: HTMLAudioElement;

  private visibilityChange$: Observable<Event>;
  private visibilityChangeSubscription: Subscription;

  ngAfterViewInit(): void {
    if ('visibilityState' in document) {
      this.visibilityChange$ = fromEvent(document, 'visibilitychange');
      this.visibilityChangeSubscription = this.visibilityChange$.subscribe( () =>
        this.onVisibilityChange()
      );
    } else {
      this.showNoSupportError('document.visibilityState');
    }
  }

  ngOnDestroy(): void {
    if (this.visibilityChangeSubscription) {
      this.visibilityChangeSubscription.unsubscribe();
    }
  }

  private onVisibilityChange(): void {
    if (document.hidden) {
      this.audioElement.pause();
    } else {
      this.audioElement.play().then(() => undefined);
    }
  }
}

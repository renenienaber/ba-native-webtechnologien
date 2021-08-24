import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {TechnologyDemoComponent} from '../../technology-demo.component';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-pointer-lock',
  templateUrl: './pointer-lock.component.html'
})
export class PointerLockComponent extends TechnologyDemoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasElement', { static: false })
  set canvasRef(ref: ElementRef<HTMLCanvasElement>) {
    this.canvasElement = ref.nativeElement;
  }

  canvasElement: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  pointerLockChange$: Observable<Event>;
  pointerLockChangeSubscription: Subscription;
  mouseMove$: Observable<Event>;
  mouseMoveSubscription: Subscription;

  RADIUS = 10;
  x = 50;
  y = 50;

  animation;

  ngAfterViewInit(): void {
    this.ctx = this.canvasElement.getContext('2d');
    this.pointerLockChange$ = fromEvent(document, 'pointerlockchange');
    this.mouseMove$ = fromEvent(document, 'mousemove');

    this.canvasDraw();
    this.pointerLockChangeSubscription = this.pointerLockChange$.subscribe(() => this.onPointerLockChange());
  }

  ngOnDestroy(): void {
    if (this.pointerLockChangeSubscription) {
      this.pointerLockChangeSubscription.unsubscribe();
    }
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
    }
  }

  // setup canvas
  private canvasDraw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.fillStyle = '#3f51b5';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.RADIUS, 0, degToRad(360), true);
    this.ctx.fill();
  }

  requestPointerLock(): void {
    if ('requestPointerLock' in this.canvasElement) {
      this.canvasElement.requestPointerLock();
    } else {
      this.showNoSupportError('Element.requestPointerLock()');
    }
  }

  private onPointerLockChange(): void {
    if (document.pointerLockElement === this.canvasElement) {
      this.mouseMoveSubscription = this.mouseMove$.subscribe(ev => this.updatePosition(ev));
    } else {
      this.mouseMoveSubscription.unsubscribe();
    }
  }

  private updatePosition(e: any): void {
    this.x += e.movementX;
    this.y += e.movementY;
    if (this.x > this.canvasElement.width + this.RADIUS) {
      this.x = -this.RADIUS;
    }
    if (this.y > this.canvasElement.height + this.RADIUS) {
      this.y = -this.RADIUS;
    }
    if (this.x < -this.RADIUS) {
      this.x = this.canvasElement.width + this.RADIUS;
    }
    if (this.y < -this.RADIUS) {
      this.y = this.canvasElement.height + this.RADIUS;
    }

    if (!this.animation) {
      this.animation = requestAnimationFrame(() => {
        this.animation = null;
        this.canvasDraw();
      });
    }
  }
}

function degToRad(deg: number) {
  return Math.PI / 180 * deg;
}

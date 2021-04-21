import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFrameComponent } from './demo-frame.component';

describe('DemoFrameComponent', () => {
  let component: DemoFrameComponent;
  let fixture: ComponentFixture<DemoFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

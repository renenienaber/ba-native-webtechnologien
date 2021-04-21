import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetectorComponent } from './feature-detector.component';

describe('FeatureDetectorComponent', () => {
  let component: FeatureDetectorComponent;
  let fixture: ComponentFixture<FeatureDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

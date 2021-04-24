import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationSensorComponent } from './orientation-sensor.component';

describe('OrientationSensorComponent', () => {
  let component: OrientationSensorComponent;
  let fixture: ComponentFixture<OrientationSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientationSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

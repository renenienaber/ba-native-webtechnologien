import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOrientationComponent } from './device-orientation.component';

describe('DeviceOrientationComponent', () => {
  let component: DeviceOrientationComponent;
  let fixture: ComponentFixture<DeviceOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppManifestComponent } from './web-app-manifest.component';

describe('WebAppManifestComponent', () => {
  let component: WebAppManifestComponent;
  let fixture: ComponentFixture<WebAppManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAppManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

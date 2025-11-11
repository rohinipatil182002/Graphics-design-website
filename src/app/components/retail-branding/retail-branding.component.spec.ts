import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailBrandingComponent } from './retail-branding.component';

describe('RetailBrandingComponent', () => {
  let component: RetailBrandingComponent;
  let fixture: ComponentFixture<RetailBrandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailBrandingComponent]
    });
    fixture = TestBed.createComponent(RetailBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEventManagementComponent } from './sport-event-management.component';

describe('SportEventManagementComponent', () => {
  let component: SportEventManagementComponent;
  let fixture: ComponentFixture<SportEventManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportEventManagementComponent]
    });
    fixture = TestBed.createComponent(SportEventManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

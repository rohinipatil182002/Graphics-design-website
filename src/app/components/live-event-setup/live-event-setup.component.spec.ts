import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEventSetupComponent } from './live-event-setup.component';

describe('LiveEventSetupComponent', () => {
  let component: LiveEventSetupComponent;
  let fixture: ComponentFixture<LiveEventSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveEventSetupComponent]
    });
    fixture = TestBed.createComponent(LiveEventSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

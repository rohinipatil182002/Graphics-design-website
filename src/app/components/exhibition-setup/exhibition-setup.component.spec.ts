import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionSetupComponent } from './exhibition-setup.component';

describe('ExhibitionSetupComponent', () => {
  let component: ExhibitionSetupComponent;
  let fixture: ComponentFixture<ExhibitionSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibitionSetupComponent]
    });
    fixture = TestBed.createComponent(ExhibitionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

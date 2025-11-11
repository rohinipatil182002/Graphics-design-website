import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSeminarsComponent } from './conference-seminars.component';

describe('ConferenceSeminarsComponent', () => {
  let component: ConferenceSeminarsComponent;
  let fixture: ComponentFixture<ConferenceSeminarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceSeminarsComponent]
    });
    fixture = TestBed.createComponent(ConferenceSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

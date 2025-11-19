import { TestBed } from '@angular/core/testing';

import { EventsResetService } from './events-reset.service';

describe('EventsResetService', () => {
  let service: EventsResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

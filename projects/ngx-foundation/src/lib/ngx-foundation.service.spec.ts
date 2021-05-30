import { TestBed } from '@angular/core/testing';

import { NgxFoundationService } from './ngx-foundation.service';

describe('NgxFoundationService', () => {
  let service: NgxFoundationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFoundationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

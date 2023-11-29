import { TestBed } from '@angular/core/testing';

import { PestserveService } from './pestserve.service';

describe('PestserveService', () => {
  let service: PestserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PestserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

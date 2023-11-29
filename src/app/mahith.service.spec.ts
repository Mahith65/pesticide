import { TestBed } from '@angular/core/testing';

import { MahithService } from './mahith.service';

describe('MahithService', () => {
  let service: MahithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MahithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

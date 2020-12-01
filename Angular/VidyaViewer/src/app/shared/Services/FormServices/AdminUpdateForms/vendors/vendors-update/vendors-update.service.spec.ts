import { TestBed } from '@angular/core/testing';

import { VendorsUpdateService } from './vendors-update.service';

describe('VendorsUpdateService', () => {
  let service: VendorsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

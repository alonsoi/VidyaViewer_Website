import { TestBed } from '@angular/core/testing';

import { VendorsAddService } from './vendors-add.service';

describe('VendorsAddService', () => {
  let service: VendorsAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

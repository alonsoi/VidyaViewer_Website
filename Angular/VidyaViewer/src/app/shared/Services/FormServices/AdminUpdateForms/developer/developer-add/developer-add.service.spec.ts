import { TestBed } from '@angular/core/testing';

import { DeveloperAddService } from './developer-add.service';

describe('DeveloperAddService', () => {
  let service: DeveloperAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

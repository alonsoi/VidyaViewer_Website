import { TestBed } from '@angular/core/testing';

import { DeveloperUpdateService } from './developer-update.service';

describe('DeveloperUpdateService', () => {
  let service: DeveloperUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

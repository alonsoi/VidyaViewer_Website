import { TestBed } from '@angular/core/testing';

import { ThemeAddService } from './theme-add.service';

describe('ThemeAddService', () => {
  let service: ThemeAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

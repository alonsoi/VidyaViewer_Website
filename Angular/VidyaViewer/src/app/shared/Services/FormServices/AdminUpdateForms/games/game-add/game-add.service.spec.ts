import { TestBed } from '@angular/core/testing';

import { GameAddService } from './game-add.service';

describe('GameAddService', () => {
  let service: GameAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

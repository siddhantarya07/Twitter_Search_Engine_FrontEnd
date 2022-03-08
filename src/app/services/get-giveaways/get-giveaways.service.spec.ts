import { TestBed } from '@angular/core/testing';

import { GetGiveawaysService } from './get-giveaways.service';

describe('GetGiveawaysService', () => {
  let service: GetGiveawaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGiveawaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CdService } from './cds.service';

describe('FlightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdService = TestBed.get(CdService);
    expect(service).toBeTruthy();
  });
});

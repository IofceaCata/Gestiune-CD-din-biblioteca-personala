/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenerateService } from './generate.service';

describe('Service: Generate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateService]
    });
  });

  it('should ...', inject([GenerateService], (service: GenerateService) => {
    expect(service).toBeTruthy();
  }));
});

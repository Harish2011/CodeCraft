import { TestBed } from '@angular/core/testing';

import { PcconceptService } from './pcconcept.service';

describe('PcconceptService', () => {
  let service: PcconceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcconceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

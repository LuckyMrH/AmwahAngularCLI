import { TestBed } from '@angular/core/testing';

import { StateCensusDataServiceService } from './state-census-data.service.service';

describe('StateCensusDataServiceService', () => {
  let service: StateCensusDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateCensusDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

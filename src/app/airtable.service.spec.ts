/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirtableService } from './airtable.service';

describe('AirtableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirtableService]
    });
  });

  it('should ...', inject([AirtableService], (service: AirtableService) => {
    expect(service).toBeTruthy();
  }));
});

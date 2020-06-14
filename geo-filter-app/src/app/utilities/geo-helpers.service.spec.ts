import { TestBed, inject } from '@angular/core/testing';

import { GeoHelpersService } from './geo-helpers.service';

describe('GeoHelpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoHelpersService]
    });
  });

  it('should be created', inject([GeoHelpersService], (service: GeoHelpersService) => {
    expect(service).toBeTruthy();
  }));
});

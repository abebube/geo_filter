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

describe('getDistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoHelpersService]
    });
  });

  it('should be 0 if latitude or longitude is invalid', inject([GeoHelpersService], (service: GeoHelpersService) => {
    expect(service.getDistance(null, null, 0, 0, 'K')).toEqual(undefined);
  }));
});

describe('degreeToRadians', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoHelpersService]
    });
  });

  it('should be undefined if input invalid', inject([GeoHelpersService], (service: GeoHelpersService) => {
    expect(service.degreeToRadius(null)).toEqual(undefined);
    expect(service.degreeToRadius(undefined)).toEqual(undefined);
  }));
});

describe('radiansToDegree', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoHelpersService]
    });
  });

  it('should be undefined if input invalid', inject([GeoHelpersService], (service: GeoHelpersService) => {
    expect(service.radiusToDegree(null)).toEqual(undefined);
    expect(service.radiusToDegree(undefined)).toEqual(undefined);
  }));
});
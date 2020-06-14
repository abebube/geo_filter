import { TestBed, inject } from '@angular/core/testing';

import { FileHelperService } from './file-helper.service';

describe('FileHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileHelperService]
    });
  });

  it('should be created', inject([FileHelperService], (service: FileHelperService) => {
    expect(service).toBeTruthy();
  }));
});

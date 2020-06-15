import { TestBed, inject } from '@angular/core/testing';

import { FileHelperService } from './file-helper.service';

let _fileHelperService:FileHelperService = new FileHelperService();

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

describe('download', ()=>{
  it('should not run if file name or content is empty', ()=>{
    expect(_fileHelperService.download('','')).toBeFalsy();
  });
});

import { TestBed, inject } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { CustomerService } from "./customer.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('getCustomers', ()=>{
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CustomerService]
    });
  });

  it('should give us text output', inject([CustomerService], (service: CustomerService) => {
    let customerFetch = service.getCustomers();
    customerFetch.subscribe((result)=>{
      expect(result).not.toBeNull();
      expect(result).not.toBeUndefined();
    });
  }));

})
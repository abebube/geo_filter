import { TestBed, inject } from '@angular/core/testing';

import { UtilitiesService } from './utilities.service';
import { User } from '../models/user';

describe('UtilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService]
    });
  });

  it('should be created', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service).toBeTruthy();
  }));
});


describe('formatCustomerData', ()=>{
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService]
    });
  });

  it('it should return empty list if customers input string is empty or null or undefined', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.formatCustomerData('')).toEqual([]);
    expect(service.formatCustomerData(null)).toEqual([]);
    expect(service.formatCustomerData(undefined)).toEqual([]);
  }));

  it('it should return list if customer input is invalid', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.formatCustomerData('{dd:dd')).toEqual([]);
  }));

})


describe('sortCustomers', ()=>{

  let mockUsers:User[] = [{ name: 'John Bull', user_id: 1, longitude: 32.2121, latitude: -5.232 }]
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService]
    });
  });

  it('it should return empty list if customers input list is empty or null or undefined', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.sortCustomers([])).toEqual([]);
    expect(service.sortCustomers(null)).toEqual([]);
    expect(service.sortCustomers(undefined)).toEqual([]);
  }));

})


describe('convertUsersToText', ()=>{

  let mockUsers:User[] = [{ name: 'John Bull', user_id: 1, longitude: 32.2121, latitude: -5.232 }]
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService]
    });
  });

  it('it should return empty string if users list or format is empty or null or undefined', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.convertUsersToText('',[])).toEqual('');
    expect(service.convertUsersToText('',mockUsers)).toEqual('');
    expect(service.convertUsersToText('json',[])).toEqual('');
  }));

  it('it should return empty string format is invalid', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.convertUsersToText('csv',[])).toEqual('');
  }));

  it('it should not return empty string if input is valid', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service.convertUsersToText('json',mockUsers)).not.toEqual('');
  }));

})
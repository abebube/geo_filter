import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { appConfig } from '../config/appConfig';
import { GeoHelpersService } from './geo-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private _geoHelperService: GeoHelpersService
  ) { }

  //convert unformatted json object string to a user type list
  formatCustomerData(customers:string):User[]{
    let users: User[] = [];
    let customerArray:string[] = customers.split(/\r?\n/);
    for(let customer of customerArray)
      users.push(JSON.parse(customer))
    return users;
  }

  //filter by location and sort customers
  sortCustomers(users:User[]):User[]{
    //filterlocation
    let nearbyUsers:User[] = [];
    for(let user of users){
      let userDistance:number = this._geoHelperService.getDistance(appConfig.companyLatitude, appConfig.companyLongitude, user.latitude, user.longitude, 'K');
      //console.log('Username and User Distance =>', user.name + ' => ' + userDistance + ' km')
      if(userDistance <= 100){
        nearbyUsers.push(user);
      }
    }
    //sort by id
    users = nearbyUsers;
    users = users.sort((a, b) => Number(a.user_id) - Number(b.user_id));

    return users;
  }

  
}

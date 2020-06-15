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

    //check if customers is empty
    if(customers == null || customers.length == 0)
      return [];

    try { 
      let users: User[] = [];
      let customerArray:string[] = customers.split(/\r?\n/);
      for(let customer of customerArray)
        users.push(JSON.parse(customer))
      return users; 
    } 
    catch (error) {
      return [];
    }
  }

  //filter by location and sort customers
  sortCustomers(users:User[]):User[]{

    if(users == null || users == [] || users == undefined){
      return [];
    }

    //filterlocation
    let nearbyUsers:User[] = [];
    for(let user of users){
      let distanceResult:any = this._geoHelperService.getDistance(appConfig.companyLatitude, appConfig.companyLongitude, user.latitude, user.longitude, 'K');
      if(distanceResult != undefined){
        let userDistance:number = distanceResult;
        //console.log('Username and User Distance =>', user.name + ' => ' + userDistance + ' km')
        if(userDistance <= 100){
          nearbyUsers.push(user);
        }
      }
    }
    //sort by id
    users = nearbyUsers;
    users = users.sort((a, b) => Number(a.user_id) - Number(b.user_id));
    return users;
  }

  convertUsersToText(format:string, users:User[]):string{
    let output:string = '';

    //validate
    if(users == null || users == undefined || users.length == 0)
      return '';

    if(format == null || format == '')
      return '';
    
    let validFormats:string[] = ['json', 'json_list', 'plain']
    if(!validFormats.includes(format))
      return '';

    if(format.toLocaleLowerCase() == 'json'){
      for(let user of users){
        output += JSON.stringify(user) + '\n';
      }
    }
    if(format.toLocaleLowerCase() == 'json_list'){
      output += JSON.stringify(users);
    }
    if(format.toLocaleLowerCase() == 'plain'){
      for(let user of users){
        output += user.user_id.toString() + '. ' + user.name + '\n';
      }
    }
    
    return output;
  }

  
}

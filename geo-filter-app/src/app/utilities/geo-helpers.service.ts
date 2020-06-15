import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoHelpersService {

  constructor() { }

  
  public getDistance(lat1:number, lon1:number, lat2:number, lon2:number, unit:string)
  {
    try{

      if(
        lat1 == undefined || lat1 == null || 
        lat2 == undefined || lat2 == null || 
        lon1 == undefined || lon1 == null || 
        lon2 == undefined || lon2 == null 
      ){
        return;
      }

      if ((lat1 == lat2) && (lon1 == lon2))
      {
        return 0;
      }
      else
      {
          let theta:number = lon1 - lon2;
          let dist:number = Math.sin(this.degreeToRadius(lat1)) * Math.sin(this.degreeToRadius(lat2)) + Math.cos(this.degreeToRadius(lat1)) * Math.cos(this.degreeToRadius(lat2)) * Math.cos(this.degreeToRadius(theta));
          dist = Math.acos(dist);
          dist = this.radiusToDegree(dist);
          dist = dist * 60 * 1.1515;
          if (unit == 'K') //Kilometres
          {
            dist = dist * 1.609344;
          }
          else if (unit == 'N') //Nautical miles
          {
            dist = dist * 0.8684;
          }
          //Will return in miles if none of the above units are specified
          return dist;
      }
    }
    catch(error){
      return undefined;
    }
  }

  public degreeToRadius(degree:number)
  {
    if(degree == null || degree == undefined)
      return;
    return (degree * Math.PI / 180.0);
  }

  public radiusToDegree(radians:number)
  {
    if(radians == null || radians == undefined)
      return;
    return (radians / Math.PI * 180.0);
  }
}
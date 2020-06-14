import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoHelpersService {

  constructor() { }

  
  public getDistance(lat1:number, lon1:number, lat2:number, lon2:number, unit:string)
  {
      if ((lat1 == lat2) && (lon1 == lon2))
      {
          return 0;
      }
      else
      {
          let theta:number = lon1 - lon2;
          let dist:number = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));
          dist = Math.acos(dist);
          dist = this.rad2deg(dist);
          dist = dist * 60 * 1.1515;
          if (unit == 'K')
          {
            dist = dist * 1.609344;
          }
          else if (unit == 'N')
          {
            dist = dist * 0.8684;
          }
          return (dist);
      }
  }

  private deg2rad(degree:number)
  {
      return (degree * Math.PI / 180.0);
  }

  private rad2deg(radians:number)
  {
      return (radians / Math.PI * 180.0);
  }
}

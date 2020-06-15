import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  public getCustomers():Observable<any> {
    return this._http.get('assets/customers.txt', {responseType: 'text'})
  }
}

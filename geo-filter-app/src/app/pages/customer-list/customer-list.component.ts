import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CustomerService } from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { UtilitiesService } from '../../utilities/utilities.service';
import { List } from 'linqts';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  //For Table
  rowsPerPage: number = 10;
  page: number = 1;
  users: User[] = [];
  allUsers:User[] = []
  totalRecords:number = 0;
  Math:any;

  constructor(
    private _http: HttpClient,
    private _utilitiesService: UtilitiesService,
    private _customerService:CustomerService
  ) {
    this.Math = Math;
   }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    //this._http.get('assets/customers.txt', {responseType: 'text'})
    this._customerService.getCustomers()
    .subscribe(data =>{
      let users = this._utilitiesService.formatCustomerData(data);
      users = this._utilitiesService.sortCustomers(users);
      this.allUsers = users;
      this.totalRecords = this.allUsers.length;
      this.loadUsers();
    })
  }

  //handling pagination and search at the same time
  loadUsers() {  
    let startIndex: number = (this.page * this.rowsPerPage) - this.rowsPerPage;
    let endIndex: number = (this.page * this.rowsPerPage);
    this.users = new List<User>(this.allUsers).Skip(startIndex).Take(this.rowsPerPage).OrderBy(a=>a.user_id).ToArray();  
  }

  //navigate to previous page
  previousPage() {
    if (this.page > 1) {
        this.page = this.page - 1;
    }
    this.loadUsers();
  }

  //navigate to next page
  nextPage() {
    this.page = this.page + 1;
    this.loadUsers();
  }

}

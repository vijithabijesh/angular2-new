import{Injectable} from '@angular/core';
import {CustomerList} from '../mockdata/customerdata';
import { Customer } from "app/shared/models/customer";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class CustomerService{
    constructor(private http:Http){

    }
getAllCustomers():Observable<any>{
    return this.http.get('http://127.0.0.1:8081/customer').map(response=>response.json);
}
saveCustomer(customer:Customer){
    this.http.post('http://127.0.0.1:8081/customer',customer);
}
getTasks() {
    // return an observable
    return this.http.get('/api/v1/tasks.json')
    .map( (responseData) => {
      return responseData.json();
    })
    .map((tasks: Array<any>) => {
      let result:Array<Customer> = [];
      if (tasks) {
        tasks.forEach((task) => {
          result.push(
                     new Customer(task.CustomerId, 
                              task.CustomerName,
                              task.CustomerEmail,
                              task.CustomerAddress,
                              task.IsActive));
        });
      }
      return result;
    });
  }
} // end TaskService class
}
import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  constructor() { }

  myObject:Customer[]=[{"Name": "Vijitha","Age": 25,"Email": "vijithabijesh@gmail.com","Visible":true },{ "Name": "Bijesh", "Age": 30,"Email": "vijithabijesh@gmail.com","Visible":true}];
  selectedObject:Customer;
  returnedObject:Customer;
  selectedCustomer(customer:Customer){
    this.selectedObject=customer;
  }
  mydata:Customer;
  getData(customer:Customer){
    this.returnedObject=customer;
  }
}

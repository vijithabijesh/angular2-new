import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'
import{CustomerService} from '../../shared/services/customerservice';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }
customer:Customer={CustomerName:'',CustomerId:0,CustomerAddress:'',CustomerEmail:'',IsActive:true};
saveCustomer(){
  this.customer.IsActive=true;
 this.customerService.saveCustomer(this.customer);
}
}

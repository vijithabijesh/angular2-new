import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../customer'
import{CustomerService} from '../../shared/services/customerservice';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
CustomerList;
selectedCustomer:Customer;
customerId:number;
  constructor(private routeData:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerId =this.routeData.snapshot.params['id'];
    this.CustomerList=this.customerService.getAllCustomers().subscribe(data=>this.CustomerList=data);
    this.selectedCustomer=this.CustomerList.find(x => x.CustomerId == this.customerId);
  }

}

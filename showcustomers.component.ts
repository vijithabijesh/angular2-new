import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'
import{CustomerService} from '../../shared/services/customerservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showcustomers',
  templateUrl: './showcustomers.component.html',
  styleUrls: ['./showcustomers.component.css']
})
export class ShowcustomersComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }
CustomerList :Customer[];
myobj;
  ngOnInit() {
    this.myobj=this.customerService.getAllCustomers().subscribe(data=>this.CustomerList=data);
    console.log(this.myobj);
    alert("tt");
    this.CustomerList=this.myobj;
  }
showTable:boolean=true;
SelectedCustomer:Customer;
selectCustomer(customer:Customer){
  this.showTable=false;
  this.SelectedCustomer=customer;
}
customerDetail(id:number){
  alert(id);
  let path=["customer/customer",id];
  this.router.navigate(path);
}
}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Customer} from '../customer'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() myselectedobj:Customer;
myreturnobj:Customer;
@Output() myEvent=new EventEmitter();
ApproveCustomer(){
  this.myreturnobj={Name:this.myselectedobj.Name,Age:this.myselectedobj.Age,Email:this.myselectedobj.Email};
  this.myreturnobj.Name=this.myreturnobj.Name + "Changed";
  this.myEvent.emit(this.myreturnobj);
}
RejectCustomer(){
  this.myreturnobj={Name:this.myselectedobj.Name,Age:this.myselectedobj.Age,Email:this.myselectedobj.Email};
  this.myreturnobj.Name=this.myreturnobj.Name + "Deleted";
  alert("hi");
  this.myEvent.emit(this.myreturnobj);
}
}


import{RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component'
import { ShowcustomersComponent } from './customer/showcustomers/showcustomers.component'

const myRoute:Routes=[{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'customer',component:CustomerComponent,
children:[{path:'',component:ShowcustomersComponent},
{path:'createcustomer',component:CreateCustomerComponent},
{path:'viewcustomer',component:ShowcustomersComponent},
{path:'customer/:id',component:CustomerDetailComponent}]},
{path:'**',component:ErrorComponent}];
export const Route=RouterModule.forRoot(myRoute)
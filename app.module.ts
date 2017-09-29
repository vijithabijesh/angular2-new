import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { MenuComponent } from './menu/menu.component';
import{RouterModule,Routes} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {Route} from './router.config';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ShowcustomersComponent } from './customer/showcustomers/showcustomers.component'
import{CustomerService} from './shared/services/customerservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerComponent,
    CustomerDetailComponent,
    MenuComponent,
    ErrorComponent,
    CreateCustomerComponent,
    ShowcustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Route
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetByIdComponent } from './customer/get-by-id/get-by-id.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './customer.component';
import { GetCustomerComponent } from './customer/get-customer/get-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './transaction/transactions/transactions.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { GetEmployeesComponent } from './Employee/get-employees/get-employees.component';
import { GetEmployeeByIdComponent } from './Employee/get-employee-by-id/get-employee-by-id.component';
import { DeletePopupComponent } from './customer/get-by-id/delete-popup/delete-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GetAccountsComponent } from './customer/get-accounts/get-accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { OnlyAdminService } from '../service/only-admin.service';

@NgModule({
  declarations: [
    GetByIdComponent,
    AddCustomerComponent,
    CustomerComponent,
    GetCustomerComponent,
    TransactionsComponent,
    TransactionListComponent,
    AddEmployeeComponent,
    GetEmployeesComponent,
    GetEmployeeByIdComponent,
    DeletePopupComponent,
    GetAccountsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    // RouterModule.forChild([
    //   {
    //     path: "a", component: CustomerComponent, children: [
    //       {path: "",component:ProfileComponent},
    //       { path: "addCustomer", component: AddCustomerComponent },
    //       { path: "getCustomer", component: GetCustomerComponent },
    //       { path: "getCustomerbyid/:id", component: GetByIdComponent },
    //       { path: "transaction", component: TransactionsComponent },
    //       { path: "transactions/:id", component: TransactionListComponent },
    //       { path: "getEmployees", component: GetEmployeesComponent,canActivate:[OnlyAdminService] },
    //       { path: "addEmployee", component: AddEmployeeComponent,canActivate:[OnlyAdminService] },
    //       { path: "getEmployeebyId/:id", component: GetEmployeeByIdComponent,canActivate:[OnlyAdminService] },
    //       { path: "getAccounts", component: GetAccountsComponent },
    //     ],
    //   },
    // ])
  ],
  exports:[
    CustomerComponent,
    GetByIdComponent,
    AddCustomerComponent,
    GetCustomerComponent,
    AddEmployeeComponent,
    GetEmployeesComponent,
    GetEmployeeByIdComponent,
    GetAccountsComponent,
    ProfileComponent,
  ]
})
export class AdminModuleModule { }

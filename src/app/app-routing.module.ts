import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './admin-module/customer/add-customer/add-customer.component';
import { GetByIdComponent } from './admin-module/customer/get-by-id/get-by-id.component';
import { CustomerComponent } from './admin-module/customer.component';
import { GetCustomerComponent } from './admin-module/customer/get-customer/get-customer.component';
import { TransactionsComponent } from './admin-module/transaction/transactions/transactions.component';
import { TransactionListComponent } from './admin-module/transaction/transaction-list/transaction-list.component';
import { GetEmployeesComponent } from './admin-module/Employee/get-employees/get-employees.component';
import { GetEmployeeByIdComponent } from './admin-module/Employee/get-employee-by-id/get-employee-by-id.component';
import { AddEmployeeComponent } from './admin-module/Employee/add-employee/add-employee.component';
import { GetAccountsComponent } from './admin-module/customer/get-accounts/get-accounts.component';
import { LoginComponent } from './login/login.component';
import { MNavComponent } from './nav/mnav/mnav.component';
import { ProfileComponent } from './admin-module/profile/profile.component';
import { LoginServiceService } from './service/login-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelpComponent } from './help/help.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OnlyAdminService } from './service/only-admin.service';
import { CNavComponent } from './nav/cnav/cnav.component';
import { UserProfileComponent } from './customer/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,},
  { path: '', redirectTo: '/bank/Admin',pathMatch: 'full' },
  {
    path: "bank", component: MNavComponent, children: [
      {path:'',redirectTo:'Admin',pathMatch:'full'},
      { path: 'help', component: HelpComponent},
      // {path:"Admin",loadChildren:()=>import("./admin-module/admin-module.module").then(m=>m.AdminModuleModule)}
      {
        path: "Admin", component: CustomerComponent, children: [
          {path: "",component:ProfileComponent},
          { path: "addCustomer", component: AddCustomerComponent },
          { path: "getCustomer", component: GetCustomerComponent },
          { path: "getCustomerbyid/:id", component: GetByIdComponent },
          { path: "transaction", component: TransactionsComponent },
          { path: "transactions/:id", component: TransactionListComponent },
          { path: "getEmployees", component: GetEmployeesComponent,canActivate:[OnlyAdminService] },
          { path: "addEmployee", component: AddEmployeeComponent,canActivate:[OnlyAdminService] },
          { path: "getEmployeebyId/:id", component: GetEmployeeByIdComponent,canActivate:[OnlyAdminService] },
          { path: "getAccounts", component: GetAccountsComponent },
        ],
      },
    ],canActivate:[LoginServiceService]
  },
  {path:"user",component:CNavComponent,children:[
    {path:"home",component:UserProfileComponent}
  ]},
  {path: '**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{ useHash: true }*/),],
  exports: [RouterModule],
  providers: [LoginServiceService,
    OnlyAdminService,
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }

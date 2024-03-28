import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction/transaction.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    TransactionComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TransactionComponent,
    UserProfileComponent
  ]
})
export class CustomerModule { }

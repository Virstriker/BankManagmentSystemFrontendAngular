import { Component, OnInit } from '@angular/core';
import { Accounts } from '../../../interfaces/post';
import { CustomerService } from '../../AdminService/customer.service';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrl: './get-accounts.component.css'
})
export class GetAccountsComponent implements  OnInit {
  constructor(private data:CustomerService){}
  Accounts:Array<Accounts>=[];
  DeActiveAccounts:Array<Accounts>=[];
  isChecked:boolean=false;
  show:boolean=false;
  OnCheck(){
    if(this.isChecked==true){
      this.show=true;
    }else{
      this.show=false;
    }
  }
  ngOnInit(): void {
    this.data.GetAccounts().subscribe((res)=>{this.Accounts=JSON.parse(JSON.stringify(res))});
    this.data.GetDeActiveAccounts().subscribe((res)=>{this.DeActiveAccounts=JSON.parse(JSON.stringify(res))});
  }
}

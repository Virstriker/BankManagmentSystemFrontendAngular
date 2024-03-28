import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../AdminService/customer.service';


@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrl: './get-customer.component.css'
})
export class GetCustomerComponent implements OnInit{
  constructor(public data:CustomerService,private rout:Router){}
  Aadhar:string="";
  SearchData():void{
    if(this.Aadhar == ""){
      alert("Enter Account Number");
    }else{
      let url:string = "/bank/Admin/getCustomerbyid/"+this.Aadhar;
      console.log(url);
      this.rout.navigateByUrl(url);
    }
  }
  GetDetails(aadhar:number){
    let url:string = "/bank/Admin/getCustomerbyid/"+aadhar;
      console.log(url);
      this.rout.navigateByUrl(url);
  }
  ngOnInit(): void {
    this.data.GetData();
  }
}

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PostData } from '../../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../../AdminService/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  constructor(private http: HttpClient, private rout: Router,private data:CustomerService) { }
  Message!: any;
  PostData: PostData = {
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    mobileNo: 0,
    emailId: "",
    aadharNo: 0,
    balance: 0,
    accountType: ""
  }
  OnAddCustomer() {
    let today: number = (new Date()).getFullYear();
    let birthDate = new Date(this.PostData.dateOfBirth);
    let ab: number = birthDate.getFullYear();
    const diff = today - ab;
    if (diff <= 18) {
      alert("Age must be more than 18");
    } else {
      this.data.PostCustomer(this.PostData).subscribe(data => {
        alert(data.message);
        if (data.sucess != false) {
          this.rout.navigate(['/bank/Admin/getCustomer']);
        }
      })
    }
  }
}
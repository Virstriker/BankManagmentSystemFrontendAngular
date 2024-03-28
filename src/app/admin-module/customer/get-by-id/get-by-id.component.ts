import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetData, IGetAllData } from '../../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { FormControl, FormGroup, Validator, Validators,FormBuilder } from '@angular/forms';
import { CustomerService } from '../../AdminService/customer.service';
@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent implements OnInit, OnDestroy {
  Myform: any;
  constructor(private data: CustomerService, private route: ActivatedRoute, private rout: Router, private http1: HttpClient
    , public dialog: MatDialog) {
      
     }
  UserData: Array<IGetAllData> = [];
  date: Date = new Date();
  acc: number = 0;
  bal: number = 0;
  type: string = "";
  DataFound: boolean = false;
  EditBtn: boolean = true;
  EditInfo: boolean = true;
  Load: boolean = false;
  OnEdit() {
    this.EditBtn = !this.EditBtn;
    this.EditInfo = !this.EditInfo;
    let editable = document.querySelectorAll('.editable');
    editable.forEach(element => {
      (element as HTMLElement).style.color = "white";
    });
  }
  OnUpdate() {
    let UpdateData: GetData = {
      userId: this.UserData[0].userId,
      firstName: this.Myform.value.firstName,
      lastName: this.Myform.value.lastName,
      dateOfBirth: new Date(this.UserData[0].dateOfBirth),
      mobileNo: this.Myform.value.mobileNo,
      emailId: this.Myform.value.emailId,
      aadharNo: this.Myform.value.aadharNo,
      active: true
    }
    this.data.UpdateCustomer(UpdateData).subscribe((res: any) => {
      alert(res.message);
      this.rout.navigate(["/bank/Admin/getCustomer"]);
    })
  }
   DeleteUser() {
    this.data.DeleteCustomer(this.UserData[0].aadharNo).subscribe((data: any) => {
      alert(data.message)
      if (data != null || data.sucess == true) {
        this.rout.navigate(["/bank/Admin/getCustomer"]);
      }
    });
  }
  OnAdd() {
    let dialogRef = this.dialog.open(DeletePopupComponent, {
      data: {UserId: this.UserData[0].userId }
    });
  }
  DeleteUserAccount(id:number){
    this.data.DeleteAccount(id).subscribe((response:any)=>{
      alert(response.message);
      if (response != null || response.sucess == true) {
        this.rout.navigate(["/bank/Admin/getCustomer"]);
      }
    })
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.Load = true;
    }, 1000);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.data.GetDataByAadhar(parseInt(id)).subscribe(data => {
        this.UserData = data;
        console.log(data);
        if (this.UserData.length == 0) {
          this.DataFound = true;
          setTimeout(() => {
            this.DataFound = true;
            this.rout.navigate(['/bank/Admin/getCustomer']);
          }, 3000);
        } else {
          this.Myform = new FormGroup({
            firstName: new FormControl(this.UserData[0].firstName, Validators.required),
            lastName: new FormControl(this.UserData[0].lastName, Validators.required),
            dateOfBirth: new FormControl({ value: this.UserData[0].dateOfBirth, disabled: true }),
            mobileNo: new FormControl(this.UserData[0].mobileNo, [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
            emailId: new FormControl(this.UserData[0].emailId, [Validators.required, Validators.email]),
            aadharNo: new FormControl(this.UserData[0].aadharNo, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
          })
        }
      });
    } else {
      this.rout.navigate(["/bank/Admin/getCustomer"]);
    }
  }
  get val() {
    return this.Myform.controls;
  }
  formatDate(dateOfBirth: any): any {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {

  }
}

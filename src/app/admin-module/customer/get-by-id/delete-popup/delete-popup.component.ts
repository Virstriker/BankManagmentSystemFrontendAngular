 import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { AddAccount } from '../../../../interfaces/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css'
})
export class DeletePopupComponent {
  id!:number;
  token = localStorage.getItem('Token')!;
  constructor( 
    public dialogRef: MatDialogRef<DeletePopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,private http:HttpClient,private rout:Router) { 
        this.id = this.data.UserId;
    } 
    NewAccoutn:AddAccount={
      balance:0,
      accountType: "Select Account Type"
    };
    onCancel(): void {
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json' ,'Authorization': this.token}
      let url = "http://localhost:5265/api/Account/AddAccount/"+this.id;
      this.http.post(url,JSON.parse(JSON.stringify(this.NewAccoutn)),{headers}).subscribe((res:any)=>{
        if(res.sucess == true){
          alert(res.message);
          this.rout.navigate(['/bank/Admin/getCustomer'])
          this.dialogRef.close(); 
        }else{
          alert(res.message);
        }
      })
    } 
}

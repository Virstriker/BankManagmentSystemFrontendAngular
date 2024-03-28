import { Component, OnInit } from '@angular/core';
import { Employees } from '../../../interfaces/Employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../AdminService/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrl: './get-employees.component.css'
})
export class GetEmployeesComponent implements OnInit{
  constructor(private data:EmployeeService,private rout:Router){}
  EmployeeId!:number;
  Employees:Array<Employees>=[];
  sub:any;
  SearchData(id:number|null){
    let url:string = "/bank/Admin/getEmployeebyId/";
    if (id===null){
        if(this.EmployeeId != null){
          this.rout.navigateByUrl(url+this.EmployeeId);
        }else{
          alert( "Please Enter the ID");
        }
      }else{
      this.rout.navigateByUrl(url+id);
    }
  }
async getData(){
  try {
    console.log("before");
    this.sub = (await this.data.GetEmployees()).subscribe((Response)=>{
      console.log("inside sub");
      this.Employees=Response});
    console.log("after");
  } catch (error) {
    console.log(error);
  }

}
ngOnInit(): void {
  try {   
    // console.log("helo")
    this.getData();
    // console.log("helo")
  } catch (error) {
    console.log(error);
  }
}
ngOnDestroy(event:Event):void {
  this.sub.unsubscribe();
}
}

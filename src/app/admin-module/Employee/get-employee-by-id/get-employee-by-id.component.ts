import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AddEmployees, Employees } from '../../../interfaces/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../AdminService/employee.service';

@Component({
  selector: 'app-get-employee-by-id',
  templateUrl: './get-employee-by-id.component.html',
  styleUrl: './get-employee-by-id.component.css'
})
export class GetEmployeeByIdComponent implements OnInit {
  DataFound: boolean=true;
  // Myform!: FormGroup<any>;
  constructor(private data: EmployeeService,private router:ActivatedRoute,private rout:Router,private http:HttpClient) {
  }
  Myform: FormGroup<any> = new FormGroup({
    employeeFirstName: new FormControl('', Validators.required),
    employeeLastName: new FormControl('', Validators.required),
    employeeDateOfBirth: new FormControl(''),
    employeeMobileNo: new FormControl('', [Validators.min(1000000000), Validators.max(10000000000), Validators.required]),
    employeeEmailId: new FormControl('', [Validators.required, Validators.email]),
    employeeAadharNo: new FormControl('', [Validators.required, Validators.min(100000000000), Validators.max(1000000000000)]),
    employeLoginId: new FormControl('',[Validators.required]),
    employeeLoginPassword: new FormControl('',[Validators.required]),
    employeeIsAdmin: new FormControl(''),
  });
  Edit:boolean=true;
  Employee!: Employees;
  isEdit:boolean=false;
  Read:boolean=true;
  id!:string|null;
  UpdateEmployee!:Employees;
  OnEdit(){
    this.isEdit=true;
    this.Read=false;
  }
  OnDelete(){
    if(this.id!=null){
      this.data.DeleteEmployee(parseInt(this.id)).subscribe((data:any)=>{
        alert(data.message);
        if(data.sucess==true){
          this.rout.navigate(['/bank/Admin/getEmployees']);
        }
      })

    }
  }
  onUpdate(){
    if(this.id!=null){
      this.UpdateEmployee = this.Myform.value as Employees;
      this.UpdateEmployee.employeeId = parseInt(this.id);
      this.data.UpdateEmployee(this.UpdateEmployee).subscribe((data:any)=>{
        alert(data.message);
        if(data.sucess==true){
          this.rout.navigate(['/bank/Admin/getEmployees']);
        }
      })
    }
  }
  async ngOnInit(): Promise<void> {
  this.id = this.router.snapshot.paramMap.get('id');
    if(this.id!=null){
      await this.data.GetEmployeeById(parseInt(this.id)).subscribe(res => {
      this.Employee = res;
        if (res == null) {
          this.DataFound = true;
          setTimeout(() => {
            this.DataFound = true;
            this.rout.navigate(['/bank/Admin/getEmployees']);
          }, 1000);
        } else {
          this.DataFound = false;
          this.Myform.controls['employeeFirstName'].setValue(this.Employee.employeeFirstName);
          this.Myform.controls['employeeLastName'].setValue(this.Employee.employeeLastName);
          this.Myform.controls['employeeDateOfBirth'].setValue(this.Employee.employeeDateOfBirth);
          this.Myform.controls['employeeMobileNo'].setValue(this.Employee.employeeMobileNo);
          this.Myform.controls['employeeEmailId'].setValue(this.Employee.employeeEmailId);
          this.Myform.controls['employeeAadharNo'].setValue(this.Employee.employeeAadharNo);
          this.Myform.controls['employeLoginId'].setValue(this.Employee.employeLoginId);
          this.Myform.controls['employeeLoginPassword'].setValue(this.Employee.employeeLoginPassword);
          this.Myform.controls['employeeIsAdmin'].setValue(this.Employee.employeeIsAdmin);
        }
      });
    }
  }
}

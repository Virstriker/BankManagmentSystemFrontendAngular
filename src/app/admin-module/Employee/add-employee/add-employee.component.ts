import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators,FormControl}from '@angular/forms';
import { AddEmployees, Employees } from '../../../interfaces/Employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../../AdminService/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  employeeForm!: FormGroup;
  AddEmployee!:AddEmployees;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private rout:Router,private data:EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeFirstName: ['', Validators.required],
      employeeLastName: ['', Validators.required],
      employeeDateOfBirth: [''],
      employeeMobileNo: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      employeeEmailId: ['', [Validators.required, Validators.email]],
      employeeAadharNo: ['', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
      employeLoginId: ['', Validators.required],
      employeeLoginPassword: ['', Validators.required],
      employeeIsAdmin: [false]
    });
  }
  onSubmit(): void {
    if (this.employeeForm.valid) {
      
      this.AddEmployee=this.employeeForm.value as AddEmployees ;
      this.data.AddEmployee(this.AddEmployee).subscribe((data:any)=>{
        alert(data.message);
        if(data.sucess == true){
          this.rout.navigate(['/bank/Admin/getEmployees']);
        }
      })
    }
    
  }
  get val(){
    return  this.employeeForm.controls;
  }
}

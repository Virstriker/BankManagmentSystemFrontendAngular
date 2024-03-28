import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private rout: Router, private http: HttpClient,private log:LoginServiceService) { }

  ngOnInit() {
    let log = localStorage.getItem('IsLoggedIn');
    if(log == 'true'){
      this.rout.navigate(['bank']);
    }
    localStorage.setItem('IsLoggedIn','true')
    this.loginForm = this.formBuilder.group({
      employeLoginId: ['', Validators.required],
      employeeLoginPassword: ['', Validators.required]
    });
  }

  onSubmit():void {
    if (this.loginForm.valid) {
      this.log.LoginValidate(this.loginForm.value)
      setTimeout(() => {
        console.log(this.log.loc);
        if(this.log.Sucess == true){
          this.rout.navigate(['bank'])
        }
      }, 1000);
    }
  }
}
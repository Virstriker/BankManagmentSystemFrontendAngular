import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './service/login-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'BankManagmentSystem';
  isAdmin:boolean = true;
  constructor(private rout:Router,private login:LoginServiceService,private http:HttpClient){}
  
  ngOnInit(): void {
    
    if(!this.login.Session()){
      this.rout.navigate(['/login']);
    }

  }
  
}

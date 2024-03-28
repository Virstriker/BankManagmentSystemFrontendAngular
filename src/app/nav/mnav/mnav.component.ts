import { Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../../service/login-service.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mnav',
  templateUrl: './mnav.component.html',
  styleUrl: './mnav.component.css'
})
export class MNavComponent implements OnInit {
  constructor(public rout: Router, private login: LoginServiceService, private http: HttpClient) { }
  isAdmin!: boolean;
  current: string = "Profile";
  subscribe!:Subscription;
  onLogOut() {
    if (confirm("Are you sure?")) {
      localStorage.removeItem('UserID');
      localStorage.removeItem('Role');
      localStorage.removeItem("Token");
      localStorage.removeItem('login');
      localStorage.setItem('IsLoggedIn', 'false')
      window.location.reload();
    }
  }
  profile() {
    this.current = 'Profile';
  }
  employee() {
    this.current = 'Employee';
  }
  customer() {
    this.current = "Customer";
  }
  transaction() {
    this.current = "Transaction";
  }
  help() {
    this.current = "Help";
  }
  // private tokenExpired(token: any) {
  //   let tok = token.split(' ');
  //   const expiry = (JSON.parse(atob(tok[1].split('.')[1]))).exp;
  //   return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  // }
  // interval = async ()=>{
  //   let login = localStorage.getItem('login');
  //   this.subscribe = setInterval(() => {
  //     const token = localStorage.getItem('Token');
  //     console.log("interval");
  //     if (login != null && token != null){
  //       if (this.tokenExpired(token)) {
  //         console.log("Inside interval");
  //         this.http.post("http://localhost:5265/api/Login/GenerateToken", JSON.parse(login)).subscribe((res: any) => {
  //           let token = 'bearer ' + res.message;
  //           localStorage.removeItem('Token');
  //           localStorage.setItem("Token", token);
  //         });
  //       }
  //     }
  //   }, 5000);
    
  // }
  ngOnInit(): void {
    // this.rout.navigate(['/bank/Admin/profile']);
    let admin = localStorage.getItem('Role');
    if (admin == 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    let login = localStorage.getItem('login');
    if (login != null) {
      this.http.post("http://localhost:5265/api/Login/GenerateToken", JSON.parse(login)).subscribe((res: any) => {
        let token = 'bearer ' + res.message;
        localStorage.setItem("Token", token);
      });
    }
    // this.interval();
    // setInterval(() => {
    //   const token = localStorage.getItem('Token');
    //   console.log("interval");
    //   if (login != null && token != null){
    //     if (this.tokenExpired(token)) {
    //       console.log("Inside interval");
    //       this.http.post("http://localhost:5265/api/Login/GenerateToken", JSON.parse(login)).subscribe((res: any) => {
    //         let token = 'bearer ' + res.message;
    //         localStorage.removeItem('Token');
    //         localStorage.setItem("Token", token);
    //       });
    //     }
    //   }
    // }, 5000);
  }
  ngOnDestroy():void{
    this.subscribe.unsubscribe();
  }
}

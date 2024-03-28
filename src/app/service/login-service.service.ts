import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/Employee';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements CanActivate{
  loc!:any;
  Profile!:Profile;
  Sucess:boolean=false;
  IsAdmin!:boolean;
  IsLoggedIn!:boolean;
  constructor(private http: HttpClient) { }
    LoginValidate(login: any):any{
      localStorage.setItem('login',JSON.stringify(login));
    let url = "http://localhost:5265/api/Login/BankLogin";
    const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json' }
    this.http.post(url, login, { headers }).subscribe((res: any) => {
      if (res.sucess == true) {
        this.Sucess = true;
        alert("Login Sucessfull")
        localStorage.setItem('UserID',JSON.stringify(res.employeeVIewModel));
        let token =  'bearer '+res.token;
        localStorage.setItem('Token',token);
        if(res.admin == true){
          this.IsAdmin = true;
          localStorage.setItem('Role','admin');
        }else{
          localStorage.setItem('Role','employee');
        }
      }else{
        alert("Invalid Username or Password");
      }
    })
  }
  async IdLoggedIn():Promise<boolean>{
    return this.Sucess;
  }
  Session(){
    let a = localStorage.getItem('UserID');
    if(a==undefined){
      return false;
    }
    this.Sucess = true;
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return this.IdLoggedIn();
  }
}


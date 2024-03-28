import { Injectable } from '@angular/core';
import { GetData } from '../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueUnionFromArray } from 'rxjs';
import { AddEmployees, Employees } from '../../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  token = localStorage.getItem('Token');
  constructor(public http1:HttpClient) { }
  async GetEmployees():Promise<Observable<any>>{
    let url = "http://localhost:5265/api/Employee/GetAllEmployee";
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url, { headers });
    }
    return this.http1.get(url);
  }
  GetEmployeeById(Id:Number):Observable<any>{
    let url = "http://localhost:5265/api/Employee/GetEmployeeById/"+Id;
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url,{headers});
    }
    return this.http1.get(url);
  }
  AddEmployee(data:AddEmployees):Observable<any>{
    let url = "http://localhost:5265/api/Employee/AddEmployee";
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.post<any>(url, data,{headers})
    }
    return this.http1.post<any>(url, data)
  }
  UpdateEmployee(data:Employees):Observable<any>{
    let url = "http://localhost:5265/api/Employee/UpdateEmployee";
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.put(url,data,{headers})
    }
    return this.http1.put(url,data)
  }
  DeleteEmployee(id:number):Observable<any>{
    let url = "http://localhost:5265/api/Employee/DeleteEmployee/"+id;
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
       return this.http1.delete(url,{headers});
    }
     return this.http1.delete(url);
    }
}

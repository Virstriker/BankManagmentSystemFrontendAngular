import { Injectable } from '@angular/core';
import { GetData, PostData } from '../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  token = localStorage.getItem('Token');
  constructor(public http1: HttpClient) { }
  public data1!: Array<GetData>;
  GetData() {
    if (this.token != null) {
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      let ApiEndPoint = "http://localhost:5265/api/BankAccount/GetAllUser"
      this.http1.get(ApiEndPoint, { headers }).subscribe(data =>
        this.data1 = JSON.parse(JSON.stringify(data))
      )
    }
  }
  GetDataByAadhar(Aadhar: number): Observable<any> {
    let url: string = "http://localhost:5265/api/BankAccount/GetAllDetailsById/" + Aadhar;
    if (this.token != null) {
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url,{headers});
    }
    return this.http1.get(url);
  }
  DeleteCustomer(id: number): Observable<any> {
    let url = "http://localhost:5265/api/BankAccount/DeleteUser/" + id;
    if(this.token != null)
      return this.http1.delete(url, { headers: { "Content-Type": "application/json" ,'Authorization': this.token} });
    return this.http1.delete(url, { headers: { "Content-Type": "application/json"}});
  }
  UpdateCustomer(data: GetData): Observable<any> {
    let url = "http://localhost:5265/api/BankAccount/UpdateBankUser";
    if(this.token!=null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.put(url, JSON.stringify(data), { headers });
    }
    return this.http1.put(url, JSON.stringify(data));
  }
  PostCustomer(data: PostData): Observable<any> {
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.post<any>("http://localhost:5265/api/BankAccount/CreateAccount", JSON.stringify(data), { headers })
    }
    return this.http1.post<any>("http://localhost:5265/api/BankAccount/CreateAccount", JSON.stringify(data))
  }
  GetAccounts(): Observable<any> {
    let url = "http://localhost:5265/api/Account/GetAllAccount";
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url,{headers});
    }
    return this.http1.get(url);
  }
  GetDeActiveAccounts(): Observable<any> {
    let url = "http://localhost:5265/api/Account/GetAllDeActiveAccount";
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url,{headers});
    }
    return this.http1.get(url);
  }
  DeleteAccount(id:number) :Observable<any>{
    let url = "http://localhost:5265/api/Account/DeleteAccount/"+id;
    if(this.token!==null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.delete(url,{headers});
    }
    return this.http1.delete(url);
  }

}

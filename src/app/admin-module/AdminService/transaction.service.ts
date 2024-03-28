import { Injectable } from '@angular/core';
import { GetData, PostDepostiWithdraw, PostTransfer } from '../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Observable, isObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  token = localStorage.getItem('Token');
  constructor(public http1:HttpClient) { }
  GetTransaction(Id:number):Observable<any>{
    let url = "http://localhost:5265/api/TransctionCnotroller/GetAccountTransaction/"+Id;
    if(this.token!=null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      return this.http1.get(url,{headers});
    }
    return this.http1.get(url);
  }
  Withdraw(data:PostDepostiWithdraw):Observable<any>{
    let url = "http://localhost:5265/api/TransctionCnotroller/WithdrawMoney";
    if(this.token!=null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.post(url,JSON.parse(JSON.stringify(data)),{headers})
    }
    return this.http1.post(url,JSON.parse(JSON.stringify(data)))
  }
  Deposit(data:PostDepostiWithdraw):Observable<any>{
    let url = "http://localhost:5265/api/TransctionCnotroller/DepositMoney";
    if(this.token!=null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.post(url,JSON.parse(JSON.stringify(data)),{headers})
    }
    return this.http1.post(url,JSON.parse(JSON.stringify(data)))
  }
  Transfer(data:PostTransfer):Observable<any>{
    let url = "http://localhost:5265/api/TransctionCnotroller/TransferMoney";
    if(this.token!=null){
      const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json','Authorization': this.token }
      return this.http1.post(url,JSON.parse(JSON.stringify(data)),{headers})
    }
    return this.http1.post(url,JSON.parse(JSON.stringify(data)))
  }
}

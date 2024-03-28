import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction, PostDepostiWithdraw, PostTransfer } from '../../../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../../AdminService/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{
  constructor(private rout:Router,private http:HttpClient,private data:TransactionService){}
  InputModel:PostTransfer={
    transactionAccount:0,
    transactionToAccount:0,
    transactionAmount:0
  };
  TransferModel:PostTransfer={
    transactionAccount:0,
    transactionToAccount:0,
    transactionAmount:0
  };
  DepositWithdrawModel:PostDepostiWithdraw={
    transactionAccount:0,
    transactionAmount:0
  };
  Account!:number;
  DWT:boolean=false;
  IsTransfer:boolean=false;
  ShowButton:boolean=false;
  TransactionType:string ="Choose Transaction Type";
  Transaction(){
    if(this.Account==undefined || this.Account == null){
      alert("Enter Account Number");
    }else{
      this.rout.navigate(['/bank/Admin/transactions/'+this.Account]);
    }
  }
  onValueChange(){
    if(this.TransactionType == "Deposit" || this.TransactionType == "Withdraw"){
      this.DWT = true;
      this.ShowButton = true;
      this.IsTransfer = false;
    }
    if(this.TransactionType == "Transfer"){
      this.IsTransfer = true;
      this.ShowButton = true;
    }
  }
  onAddTransaction(){
    const headers = { 'accept': 'text/plain', 'Content-Type': 'application/json' }
    if(this.TransactionType == "Transfer"){
      this.TransferModel = this.InputModel;
      this.data.Transfer(this.TransferModel).subscribe((Response:any)=>{
        if(Response.sucess == false){
          alert(Response.message);
        }else{
          alert(Response.message);
        }
      })
    }
    if(this.TransactionType == "Deposit"){
      this.DepositWithdrawModel.transactionAccount = this.InputModel.transactionToAccount;
      this.DepositWithdrawModel.transactionAmount = this.InputModel.transactionAmount;
      this.data.Deposit(this.DepositWithdrawModel).subscribe((Response:any)=>{
        if(Response.sucess == false){
          alert(Response.message);
        }else{
          alert(Response.message);
        }
      })
      
    }
    if(this.TransactionType == "Withdraw"){
      this.DepositWithdrawModel.transactionAccount = this.InputModel.transactionToAccount;
      this.DepositWithdrawModel.transactionAmount = this.InputModel.transactionAmount;
      this.data.Withdraw(this.DepositWithdrawModel).subscribe((Response:any)=>{
        if(Response.sucess == false){
          alert(Response.message);
        }else{
          alert(Response.message);
        }
      })
    }
  }
  ngOnInit(): void {
    
  }
}

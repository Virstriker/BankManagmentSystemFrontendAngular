import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransaction } from '../../../interfaces/post';
import { TransactionService } from '../../AdminService/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit{
  constructor(private data:TransactionService,private route:ActivatedRoute,private rout:Router){}
  id!:string | null;
  intId!:number;
  Transactions!:Array<ITransaction>;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null){
      this.intId= parseInt(this.id);
      this.data.GetTransaction(parseInt(this.id)).subscribe((res:any)=>{
        this.Transactions = res
        // console.log(this.Transactions);
        if(res == null){
          this.rout.navigate(['/bank/Admin/transaction'])
        }
      })
    }
 }
}

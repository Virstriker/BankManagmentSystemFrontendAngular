import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  constructor(private http:HttpClient){}
  Type: string="Select Type";
  Rate!:number;
  token = localStorage.getItem('Token');
  onChange(){
    let url = "http://localhost:5265/api/GetIntrest/GetIntrest/";
    if(this.Type == "current" && this.token!=null){
      const headers = { 'accept': 'text/plain', 'Authorization': this.token };
      this.http.get(url+1,{headers}).subscribe((data:any)=>{
        this.Rate = data.intrestRate;
      });
    }else{
      if(this.token!=null){
        const headers = { 'accept': 'text/plain', 'Authorization': this.token };
        this.http.get(url+2,{headers}).subscribe((data:any)=>{
          this.Rate = data.intrestRate;
        });
      }
    }
  }
}

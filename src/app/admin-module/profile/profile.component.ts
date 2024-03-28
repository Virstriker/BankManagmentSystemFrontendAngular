import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from '../../service/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements  OnInit {
  constructor(public data:LoginServiceService) { }
  Profile!:any;
  ngOnInit(): void {
    if(this.data.Profile == undefined){
      let Data = localStorage.getItem('UserID');
      if(Data != null){
        this.Profile = JSON.parse(Data);
      }
    }else{
      this.Profile = this.data.Profile;
    }
  }
}

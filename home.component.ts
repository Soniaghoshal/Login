import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() register:any;
  username: string="";
  password:string="";
  email:string="";
  phone:string="";
  registration:any=[];
  ModalTitle: string;
  ActivateAddEditEmpComp:boolean=false;
  reg: { username: string; password: string; email: string; phone: string; };
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }


  login(){
      if(this.username=="" || this.password=="" || this.email=="" || this.phone==""){
        alert("Please enter the values")
      }
      
    }

    addUsers(){
    
      var val = { username:this.username,
                  password:this.password,
                  email:this.email,
                  phone:this.phone};
      this.service.addUsers(val).subscribe(res=>{
        alert(res.toString());
      });
    }

   
}

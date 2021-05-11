import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string='';
  userName: string = '';
 

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  goToPage(){
    this.router.navigateByUrl('userdetails');
  }

  login(){
    if(this.userName=="sonia" && this.password=="sonia@123"){
      alert("Login done successfully!!");
    
      this.userName="";
      this.password="";
      this.goToPage();
      
    }
    
    else{
    alert("Unauthorized access!!");
    this.userName="";
    this.password="";
    
    }

  }
}

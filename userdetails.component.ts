import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  reg:any;
  ActivateAddEditEmpComp: boolean;
  onEditButtonClick: any;
  title: string;
  home: any;
  activeindex: any;
  constructor(private service:SharedService){}
  UserList:any=[];
  
  ngOnInit(): void {
  this.refreshUserList();
  
  }

refreshUserList(){
  this.service.getUsers().subscribe(data=>{
    this.UserList=data;
  });
}
editUser(reg,index){
  this.title='Update';
  this.home=reg;
  this.activeindex=index;
}

delete(j){
  alert("Working");
  this.service.deleteUsers(j).subscribe(data=>{
    this.UserList=data;
    this.refreshUserList();
  })
}
}

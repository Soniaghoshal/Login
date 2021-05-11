import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import {Observable} from 'rxjs'; 

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  updateUser(val: { username: any; password: any; email: any; phone: any; }) {
    throw new Error('Method not implemented.');
  }
 
  APIUrl="https://localhost:44339/api"
  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/register');
  }

  addUsers(val:any){
    return this.http.post(this.APIUrl+'/register',val);
  }

  updateUsers(val:any){
    return this.http.put(this.APIUrl+'/register',val);
  }

  deleteUsers(username:any){
    return this.http.delete('https://localhost:44339/api/register/'+username)
    
    }
    
   
}

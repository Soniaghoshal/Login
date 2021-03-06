import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
                          {path:'home', component:HomeComponent},
                          {path:'login', component:LoginComponent},
                          {path:'userdetails',component:UserdetailsComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,LoginComponent,UserdetailsComponent];

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;
  isAdmin:boolean=false;

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    const userDetails:{username:string,password:string}={
      username:email,
      password:password
    }
    return this.http.post<string>('/product/authenticate',userDetails);
  }

  
  validate(){
    return this.http.get<boolean>('/product/token/validate');
  }
}

import { Injectable,Injector } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http:HttpClient) { }
  registerUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })}
    return this.http.post('http://localhost:3000/users/adduser', user, httpOptions)
    .pipe(map(res=>res));
    
  }

  //login

  authenticateUser(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })}
    return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions)
    .pipe(map(res=>res));
  }
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
  login(){
    return !!localStorage.getItem(this.authToken);
  }
  grtToken(){
    return localStorage.getItem('token');
  }
}

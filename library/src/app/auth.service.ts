import { Injectable } from '@angular/core';
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
}

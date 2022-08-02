import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get("http://localhost:3000/users")
  }
  userregister(user){
    if(user.name==undefined||user.email==undefined||user.password==undefined)
      return false;
      else
      return true;
    


  }
}

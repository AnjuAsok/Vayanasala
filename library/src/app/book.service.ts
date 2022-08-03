import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getbooks(){
    return this.http.get("http://localhost:3000/books")
  }
  validate(book){
    if(book.title==undefined||book.auther==undefined||book.about==undefined||book.image==undefined )
    {
      return false;
    }
    else{
      return true;
    }
  }
  addbook(book){
    return this.http.post("http://localhost:3000/books/addbook",{"book":book})
  }
  
}

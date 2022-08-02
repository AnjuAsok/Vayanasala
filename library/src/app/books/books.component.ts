import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {BookService } from '../book.service';

 export class Book{
  constructor(
      public _id: number,
      public title: string,
      public auther: string,
      public about: string,
      public image: string
      ){}
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books:Book[]=[];

  constructor(private bookservice:BookService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(){
    this.http.get<any>('http://localhost:3000/books').subscribe(
      response => {
        console.log(response);
        this.books = response;
      }
    );
  }

}

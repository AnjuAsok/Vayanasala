import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:string;
  auther:string;
  about:string;
  image:string;
  constructor(private bookService:BookService,
    private router:Router,
    private flashmsg:FlashMessagesService ) { }

  ngOnInit(): void {
  }
  addBook(){
    const book={
      title:this.title,
      auther:this.auther,
      about:this.about,
      image:this.image
    }
    //if(!this.validateService.validateRegister(user))
    if(!this.bookService.validate(book))
    {
      this.flashmsg.show('please fill all the field',{cssClass:'alert-danger',timeout:5000});
      return false;
    }
   this.bookService.addbook(book).subscribe(data=>{
      
    if(data['success']){
      this.router.navigate(['/books']);
      
    }
    else{
      this.flashmsg.show('something went wrong ',{cssClass:'alert-danger',timeout:3000})
      this.router.navigate(['/signup']);

      
    }


  });
  }
}

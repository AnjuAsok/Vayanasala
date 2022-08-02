import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { EditbookComponent } from './editbook/editbook.component';

import { ValidateService } from './validate.service';
import { FlashMessagesModule } from 'flash-messages-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddbookComponent,
    DeletebookComponent,
    EditbookComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
    
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

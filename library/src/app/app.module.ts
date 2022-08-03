import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Router, RouterModule,Routes} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditbookComponent } from './editbook/editbook.component';

import { ValidateService } from './validate.service';
import { AuthService } from './auth.service';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AddbookComponent } from './addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
   
    EditbookComponent,
    AddbookComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule,
    

    
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

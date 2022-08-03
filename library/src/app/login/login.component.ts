import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
    
  ) { }

  ngOnInit(): void {
  }
  onLoginSubmit(){
    const user={
      email:this.email,
      password:this.password
    }
   this.authService.authenticateUser(user).subscribe(data=>{
    console.log(data);
    if(data['success']){
      this.authService.storeUserData(data['token'],data['user']);
      this.flashMessage.show('You are now registered ',{cssClass:'alert-success',timeout:3000})
      this.router.navigate(['/books']);
    }
    else{
      this.flashMessage.show('something went wrong ',{cssClass:'alert-danger',timeout:3000})
      this.router.navigate(['/signup']);
      
      
    }
    
   })
  }

}

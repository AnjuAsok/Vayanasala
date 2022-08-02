import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:String;
  email:String;
  password:String;
  constructor(private validateService:ValidateService,private flashMessage:FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSignUpSubmit()
  {
    const user={
      name:this.name,
      email:this.email,
      password:this.password
    }
    //validate register
    if(!this.validateService.validateRegister(user))
    {
      this.flashMessage.show('please fill all the field',{cssClass:'alert-danger',timeout:5000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email))
    {
    
      this.flashMessage.show('Enter valid email id',{cssClass:'alert-danger',timeout:5000});
      return false
    }
  }

}

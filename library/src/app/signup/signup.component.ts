import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 public name:String;
  public email:String;
  public password:String;
  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
    ) { }

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
    
    //register
    this.authService.registerUser(user).subscribe(data=>{
      
      if(data['success']){
        this.flashMessage.show('You are now registered ',{cssClass:'alert-success',timeout:3000})
        this.router.navigate(['/login']);
        
      }
      else{
        this.flashMessage.show('something went wrong ',{cssClass:'alert-danger',timeout:3000})
        this.router.navigate(['/signup']);

        
      }
    })

  }


}

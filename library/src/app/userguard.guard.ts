import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authService.login()){
      return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;

    }
  }
    
  
}

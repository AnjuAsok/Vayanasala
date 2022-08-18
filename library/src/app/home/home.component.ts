import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sample:string='library';
  users:any;
  constructor(private userdata:UserService) {
    userdata.getusers().subscribe((data)=>{
      console.log(data);
      this.users=data})
   }

  ngOnInit(): void {
  }

}

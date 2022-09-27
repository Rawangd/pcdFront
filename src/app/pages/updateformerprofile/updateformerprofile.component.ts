import { FormerService } from './../services/former/former.service';
import { FormerAuthService } from './../services/former/former-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateformerprofile',
  templateUrl: './updateformerprofile.component.html',
  styleUrls: ['./updateformerprofile.component.css']
})
export class UpdateformerprofileComponent implements OnInit {

  constructor(public formerAuthService:FormerAuthService,public formerService:FormerService) { }
picture:any;
user:any;
  ngOnInit(): void {
    let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.formerService.getPicture(loggedEmail).subscribe((data: any)=>this.picture=data);
    this.formerService.getUsersByEmail(loggedEmail).subscribe((data: any)=>this.user=data);
  }

}

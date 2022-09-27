import { FormerAuthService } from './pages/services/former/former-auth.service';
import { Router } from '@angular/router';
import { StudentAuthService } from './pages/services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import { CenterAuthService } from './pages/services/center/center-auth.service';
import { AdminAuthService } from './pages/services/admin/admin-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pcd'
  constructor(public studentservice:StudentAuthService, private router :Router,private formerAuthService: FormerAuthService,private centerAuthService:CenterAuthService,private adminAuthService:AdminAuthService) {}

  ngOnInit () {
    let isloggedin: string;
  
    let loggedUser:string;
 

    /*let isloggedinF: string;
    let loggedFormer:string;*/
   
   
    isloggedin = localStorage.getItem('isloggedIn')!;
    //loggedStudent = localStorage.getItem('loggedStudent')!;

    loggedUser=localStorage.getItem('loggedUser')!;
    /*isloggedinF = localStorage.getItem('isloggedinF')!;
    loggedFormer = localStorage.getItem('loggedFormer')!;*/

 

    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/home']);
    else
    this.studentservice.setLoggedUserFromLocalStorage(loggedUser);
    this.formerAuthService.setLoggedUserFromLocalStorageF(loggedUser);
    this.centerAuthService.setLoggedUserFromLocalStorageC(loggedUser);
    this.adminAuthService.setLoggedUserFromLocalStorageA(loggedUser);

    /* if (isloggedinF!="true" || !loggedFormer)
    this.router.navigate(['/home']);
    else
    this.formerAuthService.setLoggedUserFromLocalStorageF(loggedFormer);*/
    
    
    
  }
  
}




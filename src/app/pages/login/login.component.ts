import { CenterAuthService } from './../services/center/center-auth.service';
import { FormerAuthService } from './../services/former/former-auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudentService } from '../services/student/student.service';
import { StudentAuthService } from '../services/student/student-auth.service';
import { AdminAuthService } from '../services/admin/admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  erreur=0;

  constructor( private studentService :StudentService, private studentAuthService:StudentAuthService,
    private router:Router,private formerAuthService: FormerAuthService, 
    private centerAuthService:CenterAuthService,
    private adminAuthService:AdminAuthService) { }
 
  login(loginForm: NgForm) {
    this.studentService.login(loginForm.value).subscribe(
      (response: any) => {
        
        
        
        this.studentAuthService.setRoles(response.user.role);
        this.studentAuthService.setToken(response.jwtToken);

        this.formerAuthService.setRoles(response.user.role);
        this.formerAuthService.setToken(response.jwtToken);

        this.centerAuthService.setRoles(response.user.role);
        this.centerAuthService.setToken(response.jwtToken);

        this.adminAuthService.setRoles(response.user.role);
        this.adminAuthService.setToken(response.jwtToken);
     
        console.log(response);
        const role = response.user.role[0].roleName;
        
      
        if(role==='Admin'){
          this.adminAuthService.signInA(response.user);
          this.router.navigate(['/admin']);
        }
        
        if(role==='Student'){
         this.studentAuthService.signIn(response.user);
          this.router.navigate(['/home-student']);
        }
        if(role==='Former'){
          this.formerAuthService.signInF(response.user);
          this.router.navigate(['/home-former']);
        }
        if(role==='Center'){
          this.centerAuthService.signInC(response.user);
          this.router.navigate(['/home-center']);
        }

      },
      (error) => {
       //console.log(error);
       console.log("username or password incorrect");
       this.erreur=1;
      }
    );
   
  }
  /*onLoggedin(){
    //console.log(this.user);
     let isValidUser: Boolean = this.studentAuthService.signIn(this.student);
    if (isValidUser)
    this.router.navigate(['/']);
    else
    alert('Login ou mot de passe incorrecte!');
    }*/
  
 
  ngOnInit(): void {
  }

}

import { Role } from './../../model/role';
import { Router } from '@angular/router';
import { Student } from './../../model/student';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../model/user';
@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {
 
  constructor(private router:Router) {}
   public loggedUser!:string;
  public loggedStudent!:string;
  public isloggedIn: Boolean = false;
  public roles!:Role[];
  public loggedFullName!:string;
  public loggedEmail!:string;
  public loggedAddress!:string;
  public loggedPostalCode!:number;
  public loggedCity!:string;



  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken')!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  signUp(student:Student){
    this.loggedFullName=student.userFullName;
    this.roles = student.roles;
    localStorage.setItem('loggedFullName',this.loggedFullName);

    console.log(this.loggedUser);
  }
  signIn(student :Student){
    this.loggedFullName=student.userFullName;
    this.loggedUser=student.userName;
    this.loggedEmail=student.userEmail;
    this.loggedAddress=student.userAddress;
    this.loggedPostalCode=student.userPostalCode;
    this.loggedCity=student.userCity;

    this.isloggedIn = true;
    this.roles = student.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('loggedEmail',this.loggedEmail);
    localStorage.setItem('loggedCity',this.loggedCity);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
  
    console.log(this.loggedUser);
 }

    setLoggedUserFromLocalStorage(login : string) {
     
      this.loggedUser=login;
      this.isloggedIn = true;
      this.getRoles();
      }
      
      public logout() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}

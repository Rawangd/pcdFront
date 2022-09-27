import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Role } from '../../model/role';
import { Former } from '../../model/former';

@Injectable({
  providedIn: 'root'
})
export class FormerAuthService {
 
  constructor(private router:Router) { }
public loggedUser!:string;
public loggedEmail!:string;
public loggedFullName!:string;

public loggedAddress!:string;
public loggedPostalCode!:string;
public loggedCity!:string;
public loggedLevel!:string;
public loggedDomain!:string;
public loggedExperience!:string;
public loggedDescription!:string;
public loggedTelephoneNumber!:string;



  //public isloggedInF: Boolean = false;
  public isloggedIn: Boolean = false;
  public roles!:Role[];


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

  public isLoggedInF() {
    return this.getRoles() && this.getToken();
  }
  signInF(former:Former){
    this.loggedEmail= former.userEmail;
    this.loggedUser= former.userName;
   // this.isloggedInF = true;
   this.isloggedIn = true;
    this.roles = former.roles;
  this.loggedFullName=former.userFullName;
    this.loggedAddress=former.userAddress;
    this.loggedPostalCode=former.userPostalCode;
    this.loggedCity=former.userCity;
    this.loggedDomain=former.userDomain;
    this.loggedLevel=former.userLevel;
    this.loggedExperience=former.userExperience;
    this.loggedTelephoneNumber=former.userTelephoneNumber;
  

    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('loggedEmail',this.loggedEmail);
    localStorage.setItem('loggedTelephoneNumber',this.loggedTelephoneNumber);
    localStorage.setItem('loggedCity',this.loggedCity);
 
    //localStorage.setItem('isloggedInF',String(this.isloggedInF));
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    console.log(this.loggedUser);
 }

    setLoggedUserFromLocalStorageF(login : string) {
   
      this.loggedUser= login;
      
      //this.isloggedInF = true;
      this.isloggedIn= true;
      this.getRoles();
      }
      
      public logoutF() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}
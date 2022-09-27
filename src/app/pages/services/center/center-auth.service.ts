import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../../model/center';
import { Role } from '../../model/role';

@Injectable({
  providedIn: 'root'
})
export class CenterAuthService {

  constructor(private router:Router) { }
  public loggedCenter!:string;
  public loggedUser!:string;
  public loggedTelephoneNumber!:string;
  public loggedEmail!:string;
  public loggedCity !:string;
  public loggedAddress !:string;

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

  public isLoggedInC() {
    return this.getRoles() && this.getToken();
  }
  signInC(center :Center){
    this.loggedCenter = center.centerName;
    this.loggedUser= center.userName;
    this.loggedEmail=center.userEmail;
    this.loggedTelephoneNumber=center.userTelephoneNumber;
    this.loggedCity=center.userCity;
    this.loggedAddress=center.userAddress;
    //this.isloggedInC= true;
    this.isloggedIn= true;
    this.roles = center.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('loggedCenter',this.loggedCenter);
    localStorage.setItem('loggedCity',this.loggedCity);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    localStorage.setItem('loggedTelephoneNumber',this.loggedTelephoneNumber);
    localStorage.setItem('loggedEmail',this.loggedEmail);
    localStorage.setItem('loggedAddress',this.loggedAddress);
    console.log(this.loggedCenter);
 }

    setLoggedUserFromLocalStorageC(login : string) {
      this.loggedCenter = login;
      //this.isloggedInC = true;
      this.loggedUser= login;
      this.isloggedIn= true;
      
      this.getRoles();
      }
      
      public logoutC() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}
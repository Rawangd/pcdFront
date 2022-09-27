import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../model/admin';
import { Role } from '../../model/role';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router:Router) {}
   public loggedUser!:string;
 
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

  public isLoggedInA() {
    return this.getRoles() && this.getToken();
  }

  signInA(admin:Admin){
   
    this.loggedUser=admin.userName;
    this.isloggedIn = true;
    this.roles = admin.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    console.log(this.loggedUser);
 }

    setLoggedUserFromLocalStorageA(login : string) {
      
      this.loggedUser=login;
      this.isloggedIn = true;
      this.getRoles();
      }
      
      public logoutA() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}

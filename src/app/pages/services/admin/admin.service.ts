import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  PATH_OF_API = 'http://localhost:9090';
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient: HttpClient,private adminAuthService: AdminAuthService) { }
  public login(loginData: any) {
     
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }
  getUsersByRole(roleName:String){
    return this.httpclient.get(`${this.PATH_OF_API}/roles/${roleName}`);

  }
  public deleteAdmin(admin:String) :Observable<void> {
    return this.httpclient.delete<void>(`${this.PATH_OF_API}/delete-user/${admin}`);

  }
  public roleMatchA(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const formerRoles: any = this.adminAuthService.getRoles();

    if (formerRoles!=null && formerRoles){
      for(let i =0; i<formerRoles.length;i++){
        for(let j=0;j<allowedRoles.length;j++){
          if (formerRoles[i].roleName===allowedRoles[j]){
            isMatch=true;
            return isMatch;
          }
          
        }
      }
    }
    return isMatch;
  }







}


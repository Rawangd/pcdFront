import { CenterAuthService } from './../../pages/services/center/center-auth.service';
import { FormerService } from './../../pages/services/former/former.service';
import { FormerAuthService } from './../../pages/services/former/former-auth.service';
import { UserService } from './../../pages/services/user/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../../pages/services/user/user-auth.service';
import { StudentAuthService } from './../../pages/services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/pages/model/role';
import { StudentService } from 'src/app/pages/services/student/student.service';
import { CenterService } from 'src/app/pages/services/center/center.service';
import { AdminService } from 'src/app/pages/services/admin/admin.service';
import { AdminAuthService } from 'src/app/pages/services/admin/admin-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  
  constructor(public studentAuthService:StudentAuthService,private router:Router,
    public studentService:StudentService,public formerAuthService:FormerAuthService,
    public formerService:FormerService, public centerAuthService: CenterAuthService,
    public centerservice:CenterService,public adminService:AdminService,public adminAuthService:AdminAuthService){}
 /* onLogout(){
    this.service.Logout();
  }
  */
 


  public isLoggedIn() {
    return this.studentAuthService.isLoggedIn();
  }
 /* public isLoggedInF() {
    return this.formerAuthService.isLoggedInF();
  }*/
  public isLoggedInF() {
    return this.formerAuthService.isLoggedInF();
  }
  

  ngOnInit(): void {
  }
/*  public logout() {
    this.userAuthService.clear();
   

    this.router.navigate(['/home']);
  }*/
  onLogout(){
    this.studentAuthService.logout();
  }
  /*onLogoutF(){
    this.formerAuthService.logoutF();
  }*/
  onLogoutF(){
    this.formerAuthService.logoutF();
  }
  onLogoutC(){
    this.centerAuthService.logoutC();
  }
  onLogoutA(){
    this.adminAuthService.logoutA();
  }

}

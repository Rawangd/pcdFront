import { AdminAuthService } from './../services/admin/admin-auth.service';
import { CenterAuthService } from './../services/center/center-auth.service';
import { FormerService } from './../services/former/former.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user/user-auth.service';
import { UserService } from '../services/user/user.service';
import { FormerAuthService } from '../services/former/former-auth.service';
import { StudentAuthService } from '../services/student/student-auth.service';
import { CenterService } from '../services/center/center.service';
import { AdminService } from '../services/admin/admin.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private studentAuthService: StudentAuthService,
    private router: Router,
    private studentService: UserService,
    private formerService:FormerService,
    private formerAuthService:FormerAuthService,
    private centerAuthService:CenterAuthService,
    private centerService :CenterService,
    private adminAuthService:AdminAuthService,
    private adminService :AdminService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.studentAuthService.getToken() !== null) {
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.studentService.roleMatch(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }else if (this.formerAuthService.getToken() !== null){
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.formerService.roleMatchF(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }

    }
    else if (this.centerAuthService.getToken() !== null){
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.centerService.roleMatchC(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      
    } else if(this.adminAuthService.getToken() !== null){
      const role = route.data['roles'] as Array<string>;
      if (role) {
        const match = this.adminService.roleMatchA(role);
        if(match){
          return true;
        }else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
    }
    
    this.router.navigate(['/login']);
    return false;
  }
    }
import { StudentAuthService } from './../services/student/student-auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private service: StudentAuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.service.isStudent())
       return true;
    else
    {
    this.router.navigate(['/forbidden']);
    return false;
    }
  }
  
}*/

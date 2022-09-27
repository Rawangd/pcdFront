import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentercoursesService } from '../services/centerCourses/centercourses.service';
import { CoursesService } from '../services/Courses/courses.service';
import { FormerService } from '../services/former/former.service';
import { StudentAuthService } from '../services/student/student-auth.service';

@Component({
  selector: 'app-center-courses',
  templateUrl: './center-courses.component.html',
  styleUrls: ['./center-courses.component.css']
})
export class CenterCoursesComponent implements OnInit {
  public formerEmail:any;
  public courseName:any;
  public profileMail:any;
  constructor(private centercoursesService:CentercoursesService,private route:ActivatedRoute,private studentAuthService :StudentAuthService,public coursesservice :CoursesService ) { }
  public Category=this.route.snapshot.params['category'];
courses:any;
  ngOnInit(): void {

    this.centercoursesService.getCenterCourseByCategory(this.Category).subscribe((data: any)=>this.courses=data);
  }
  
  public isLoggedIn() {
    return this.studentAuthService.isLoggedIn();
  }
/*****************************/
public favorite(id:number){
  this.coursesservice.putFavorite(id).subscribe(
    (response: any) => {
      console.log(id );
     
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
}
/***************************/

/*public clicklink(Email:String,course:String){
  this.formerEmail=Email;
  this.courseName=course;
  this. route. navigate([`/afficheprofile/${Email}/${course}`]);


}*/

}

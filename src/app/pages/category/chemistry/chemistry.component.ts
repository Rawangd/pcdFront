import { FormerService } from './../../services/former/former.service';
import { StudentAuthService } from './../../services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/Courses/courses.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CentercoursesService } from '../../services/centerCourses/centercourses.service';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {

  public profileMail:any;
  constructor(public route:Router,private fb:FormBuilder, private coursesservice:CoursesService,private studentAuthService :StudentAuthService,private formerService: FormerService,private centerCourseService:CentercoursesService) { }
  courses:any;
  centercourses:any;
  category="Chemistry";
  ngOnInit(): void {
    this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
    this.centerCourseService.getCenterCourseByCategory(this.category).subscribe((data: any)=>this.centercourses=data);
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

public formerEmail:any;
public courseName:any;
public id:any;
public clicklink(Email:String,course:String,id:number){
  this.formerEmail=Email;
  this.courseName=course;
  this.id=id;
  this. route. navigate([`/afficheprofile/${Email}/${course}/${id}`]);


}}

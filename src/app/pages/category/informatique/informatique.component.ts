import { CentercoursesService } from './../../services/centerCourses/centercourses.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/Courses/courses.service';
import { FormerService } from '../../services/former/former.service';
import { StudentAuthService } from '../../services/student/student-auth.service';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.css']
})
export class InformatiqueComponent implements OnInit {
public true=true;
  public loggedEmail=localStorage.getItem('loggedEmail')!;
  constructor(public route:Router,private fb:FormBuilder, private coursesservice:CoursesService,private studentAuthService :StudentAuthService,private formerService: FormerService,private centerCourseService:CentercoursesService) { }
  courses:any;
  category="Computer Science";

  centercourses:any;

  ngOnInit(): void {
    this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
    this.centerCourseService.getCenterCourseByCategory(this.category).subscribe((data: any)=>this.centercourses=data);
  }
  public isLoggedIn() {
    return this.studentAuthService.isLoggedIn();
  }
/*****************************/
  public favoritee(id:number,user:string){
    this.coursesservice.putFavoritee(id,user).subscribe(
      (response: any) => {
        console.log(id );
       
        console.log(user);
       
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  public insert(id:number,user:string,isFavorite:Boolean){
    this.coursesservice.insert(id,user,isFavorite).subscribe(
      (response: any) => {
        console.log(id );
       
        console.log(user);
        console.log(isFavorite);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
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

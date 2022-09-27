import { Course } from './../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/Courses/courses.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  data: any;
//category="Informatique";
showNavigationArrows = false;
showNavigationIndicators = false;
images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  editForm: any;
  constructor(private coursesservice:CoursesService,private http:HttpClient,private fb:FormBuilder,) {
    this.editForm=this.fb.group({
      price:[''],
      courseName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      formerEmail:[''],
      picture:['']
    });
  }
  count:any;
  ngOnInit() {
    let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.coursesservice.getCourseByEmail(loggedEmail).subscribe((data: any)=>this.courses=data);
    // this.coursesservice.getCountCourses().subscribe((data: any)=>this.count=data);
  // this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
   
  }
  courses:any;
  public updatecourse!:any;
  public updatecourses!:Course;
  public deletecourses!:any;
  foodForm:any;
  updateForm:any;
  file!: File ;
 // public course!: Course[] ;
 

 fnChange(event:any)
 {
   this.file=event.target.files[0];
   console.log(this.file.name);
   console.log(this.file.size);
 }

//updateCourses()
public onOpenModal(courses:any,mode:string):void{
 const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if (mode ==='update'){
    this.updatecourse=courses;
    button.setAttribute('data-target','#updatecourseModal');
  }
  if (mode ==='delete'){
    this.deletecourses=courses;
    button.setAttribute('data-target','#deletecourseModal');
  }
  container?.appendChild(button);
  button.click();
}

public onUpdateCourses(courses:any): void {
  this.coursesservice.modifyCourse(courses).subscribe((data: any)=>this.courses=data);
}
public onUpdateCourse(courses:Course): void {
  let loggedEmail: string;
   loggedEmail=localStorage.getItem('loggedEmail')!;
  this.coursesservice.modifyCourse(courses).subscribe(
    (response) => {
      console.log(response);
      this.coursesservice.getCourseByEmail(loggedEmail);
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
}/*
public onDeleteCourses(courseId: number): void {
  let loggedEmail: string;
  loggedEmail=localStorage.getItem('loggedEmail')!;
  this.coursesservice.deleteCourses(courseId).subscribe(
    (response: void) => {
      console.log(response);
      this.coursesservice.getCourseByEmail(loggedEmail);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}*/
public onDeleteCourse(courseId: number){
  this.coursesservice.deleteCourses(courseId).subscribe(
    (data: any)=>
    this.courses=data);

 
  
}
/*public count(){
  this.coursesservice.getAllCourses().subscribe(
    (response: any) => {console.log('count te5dem')
},
(error) => {
 //console.log(error);
 console.log("count te5demch");
 
}
);

}*/

}


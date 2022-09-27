import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { CentercoursesService } from '../services/centerCourses/centercourses.service';
import { CoursesService } from '../services/Courses/courses.service';
import { FormerService } from '../services/former/former.service';
import { StudentAuthService } from '../services/student/student-auth.service';

@Component({
  selector: 'app-recherche-prof-center',
  templateUrl: './recherche-prof-center.component.html',
  styleUrls: ['./recherche-prof-center.component.css']
})
export class RechercheProfCenterComponent implements OnInit {

  courses!: any[] ;
  public loggedEmail=localStorage.getItem('loggedEmail')!;
  constructor(public route:Router,private fb:FormBuilder, private coursesservice:CoursesService,private studentAuthService :StudentAuthService,private formerService: FormerService,private centerCourseService:CentercoursesService) { }



  centercourses:any;

  ngOnInit(): void {

    let loggedCity: string;
    loggedCity=localStorage.getItem('loggedCity')!;
    this.coursesservice.getCourseByCity(loggedCity).subscribe((data: any)=>this.courses=data);

    }
    
  public isLoggedIn() {
    return this.studentAuthService.isLoggedIn();
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


}

public searchValues(key: string): void {
  console.log(key);
  const results: Course[] = [];
  for (const cours of this.courses) {
    if (cours.courseName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || cours.formerEmail.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || cours.formerName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || cours.category.toLowerCase().indexOf(key.toLowerCase()) !== -1
    )
     {
      results.push(cours);
    }
  }
  this.courses = results;
  if (results.length === 0 || !key) {
    let loggedCity: string;
    loggedCity=localStorage.getItem('loggedCity')!;
    this.coursesservice.getCourseByCity(loggedCity);
  }
}


}

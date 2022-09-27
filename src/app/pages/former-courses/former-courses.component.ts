import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/Courses/courses.service';

@Component({
  selector: 'app-former-courses',
  templateUrl: './former-courses.component.html',
  styleUrls: ['./former-courses.component.css']
})
export class FormerCoursesComponent implements OnInit {

  constructor(private coursesservice:CoursesService,private http:HttpClient) {
  
  }
courses:any;
  ngOnInit() {

    this.coursesservice.getAllCourses().subscribe((data: any)=>this.courses=data);
    // this.coursesservice.getCountCourses().subscribe((data: any)=>this.count=data);
  // this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
   
  }

}

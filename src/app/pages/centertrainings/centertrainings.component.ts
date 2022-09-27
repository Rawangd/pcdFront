import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentercoursesService } from '../services/centerCourses/centercourses.service';

@Component({
  selector: 'app-centertrainings',
  templateUrl: './centertrainings.component.html',
  styleUrls: ['./centertrainings.component.css']
})
export class CentertrainingsComponent implements OnInit {

  constructor(private centerCoursesservice:CentercoursesService,private http:HttpClient) {
  
  }
courses:any;
  ngOnInit() {

    this.centerCoursesservice.getAllCenterCourses().subscribe((data: any)=>this.courses=data);
    // this.coursesservice.getCountCourses().subscribe((data: any)=>this.count=data);
  // this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
   
  }

}

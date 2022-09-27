import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/Courses/courses.service';

@Component({
  selector: 'app-center-category',
  templateUrl: './center-category.component.html',
  styleUrls: ['./center-category.component.css']
})
export class CenterCategoryComponent implements OnInit {
  constructor(private fb:FormBuilder, private coursesservice:CoursesService,private route :Router) {}
  //category="Informatique";
  ngOnInit(): void {
   // this.coursesservice.getAllCourses().subscribe((data: any)=>this.courses=data);
    //this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
  }
  category!:String;
  courses:any;
  course= [
    {'id':1,'name':'Computer science','image':'../../../assets/img/informatique.jpg','linkpage':'center-courses/Computer Science'},
    {'id':2,'name':'Maths','image':'../../../assets/img/math.jpg','linkpage':'center-courses/Maths'},
    {'id':3,'name':'Languages','image':'../../../assets/img/langue.jpg','linkpage':'center-courses/Languages'},
    {'id':4,'name':'Physics','image':'../../../assets/img/physique1.jpg','linkpage':'center-courses/Physics'},
    {'id':5,'name':'Dance','image':'../../../assets/img/dance3.jpg','linkpage':'center-courses/Dance'},
    {'id':6,'name':'Sports','image':'../../../assets/img/sport.jpg','linkpage':'center-courses/Sports'},
    {'id':7,'name':'Chemistry','image':'../../../assets/img/chimie.jpg','linkpage':'center-courses/Chemistry'},
    {'id':8,'name':'Music','image':'../../../assets/img/musique.jfif','linkpage':'center-courses/Music'},
  
  ]
  public clicklink(category:String){
    this.category=category;
    
    this. route. navigate([`/center-category/${category}`]);
  
  
  }
}

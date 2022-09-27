import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/Courses/courses.service';

@Component({
  selector: 'app-favorites-student',
  templateUrl: './favorites-student.component.html',
  styleUrls: ['./favorites-student.component.css']
})
export class FavoritesStudentComponent implements OnInit {

  constructor(public coursesservice:CoursesService) { }
courses:any;
  ngOnInit(): void {
    
    this.coursesservice.getAllFavorites().subscribe((data: any)=>this.courses=data);
  }

}

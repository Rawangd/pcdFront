import { StudentService } from 'src/app/pages/services/student/student.service';
import { FormerService } from './../services/former/former.service';
import { CenterService } from './../services/center/center.service';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/Courses/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public coursesservice : CoursesService ,public centerService:CenterService,public formerService:FormerService,public studentService:StudentService) { }
count:any;
countCenter:any;
countFormer:any;
countStudent:any;
roleCenter="Center";
roleStudent="Student";
roleFormer="Former";
formers:any;
  ngOnInit(): void {
    this.coursesservice.getCountCourses().subscribe((data: any)=>this.count=data);
    this.centerService.getCountCenter(this.roleCenter).subscribe((data: any)=>this.countCenter=data);
    this.formerService.getCountFormer(this.roleFormer).subscribe((data: any)=>this.countFormer=data);
    this.studentService.getCountStudent(this.roleStudent).subscribe((data: any)=>this.countStudent=data);
    this.formerService.getDistinctCoursesByEmail().subscribe((data: any)=>this.formers=data);

  }
  srcImage :string="../assets/img/img.png";
}

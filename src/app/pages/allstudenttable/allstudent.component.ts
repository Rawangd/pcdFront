import { StudentService } from './../services/student/student.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent implements OnInit {
  
  constructor(private http:HttpClient,private studentService :StudentService) { }
roleName="Student";

users:any;
  ngOnInit(): void {
    this.studentService.getUsersByRole(this.roleName).subscribe((data: any)=>this.users=data);
  }
  public deleteusers!:any;
  public onDeleteStudent(courseId: String){
    this.studentService.deleteStudent(courseId).subscribe(
      (data: any)=>
      this.users=data);
  
   
    
  }
  public onOpenModal(courses:any,mode:string):void{
    const container=document.getElementById('main-container');
     const button=document.createElement('button');
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle','modal');
    
     if (mode ==='delete'){
       this.deleteusers=courses;
       button.setAttribute('data-target','#deletecourseModal');
     }
     container?.appendChild(button);
     button.click();
   }
}

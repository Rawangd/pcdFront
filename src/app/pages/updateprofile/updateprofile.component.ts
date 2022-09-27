import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentAuthService } from '../services/student/student-auth.service';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateStudent!:Student;
  constructor(public studentAuthService:StudentAuthService,public servicestudent :StudentService) { }
 
user:any;
  ngOnInit(): void {
    let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.servicestudent.getUsersByEmail(loggedEmail).subscribe((data: any)=>this.user=data);
  
  }
 

}

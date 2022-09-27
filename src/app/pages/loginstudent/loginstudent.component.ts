import { User } from './../model/user';
import { Student } from './../model/student';
import { StudentAuthService } from './../services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.component.html',
  styleUrls: ['./loginstudent.component.css']
})
export class LoginstudentComponent implements OnInit {

  student = new Student();
  msg='';
  erreur=0;
  user =new User();
  constructor(private service:StudentAuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  
  
  }


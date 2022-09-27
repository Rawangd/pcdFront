import { CenterService } from 'src/app/pages/services/center/center.service';
import { CentercoursesService } from './../services/centerCourses/centercourses.service';
import { Component, OnInit ,ViewChild, OnDestroy, SimpleChanges } from '@angular/core';

import { CenterAuthService } from '../services/center/center-auth.service';
import { FormBuilder } from '@angular/forms';
import { AnnoucementService } from '../services/announcement/annoucement.service';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.css']
})
export class HomeCenterComponent implements OnInit {
  
  public isCollapsed = false;
  courseForm:any;
  file!: File;
  announcementForm:any;
  message=0;
  messagee=0;
  Email!:String;
  courses!:any;
  formers!:any;
  user:any;
  constructor(public centerAuthService:CenterAuthService,private centerService:CenterService,private fb:FormBuilder ,public announcementService:AnnoucementService ,public centercoursesService:CentercoursesService) {
    this.centercoursesService.getAllCenterCourses().subscribe((data: any)=>this.courses=data);
    let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    
    this.centerService.getUsersByEmail(loggedEmail).subscribe((data: any)=>this.user=data);
  
    this.courseForm=this.fb.group({
      price:[''],
      courseName:[''],
      centerName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      centerEmail:[''],
      city:[''],
      picture:[''],
      date:[''],
      phoneNumber:[''],
      formerPhoneNumber:[''],
      formerEmail:[''],
      address:['']
    
    });
    this.announcementForm=this.fb.group({
      centerName:[''],
      centerEmail:[''],
      phoneNumber:[''],
      jobTitle:[''],
      domain:[''],
      salary:[''],
      language:[''],
      experience:[''],
      description:[''],

      
      address:[''],
     
      city:[''],
      
    });
   }

  ngOnInit(): void {
  }
  
  fnChange({event}: { event: any })
  {
    this.file=event.target.files[0];
    console.log(this.file.name);
    console.log(this.file.size);
  }

  fnAdd()
  {
    this.message=1;
    var fd=new FormData();

    fd.append("price",this.courseForm.controls['price'].value);
    fd.append("courseName",this.courseForm.controls['courseName'].value);
    fd.append("centerName",this.courseForm.controls['centerName'].value);
    fd.append("category",this.courseForm.controls['category'].value);
    fd.append("description",this.courseForm.controls['description'].value);
    fd.append("formerName",this.courseForm.controls['formerName'].value);
    fd.append("centerEmail",this.courseForm.controls['centerEmail'].value);
    fd.append("city",this.courseForm.controls['city'].value);
    fd.append("date",this.courseForm.controls['date'].value);
    fd.append("address",this.courseForm.controls['address'].value);
    fd.append("formerEmail",this.courseForm.controls['formerEmail'].value);
    fd.append("phoneNumber",this.courseForm.controls['phoneNumber'].value);
    fd.append("formerPhoneNumber",this.courseForm.controls['formerPhoneNumber'].value);
    fd.append("picture",this.file,this.file.name);


    this.centercoursesService.addCenterCourse(fd).subscribe((data: any)=>console.log(data));

  }
  annAdd()
  {
    this.messagee=1;
    var fd=new FormData();

    fd.append("centerName",this.announcementForm.controls['centerName'].value);
    fd.append("centerEmail",this.announcementForm.controls['centerEmail'].value);
    fd.append("phoneNumber",this.announcementForm.controls['phoneNumber'].value);
    fd.append("jobTitle",this.announcementForm.controls['jobTitle'].value);
    fd.append("domain",this.announcementForm.controls['domain'].value);
    fd.append("salary",this.announcementForm.controls['salary'].value);
    fd.append("language",this.announcementForm.controls['language'].value);
    fd.append("experience",this.announcementForm.controls['experience'].value);
    fd.append("description",this.announcementForm.controls['description'].value);
    fd.append("address",this.announcementForm.controls['address'].value);
    fd.append("city",this.announcementForm.controls['city'].value);


    this.announcementService.addAnnouncement(fd).subscribe((data: any)=>console.log(data));

  }

}

import { StudentService } from 'src/app/pages/services/student/student.service';
import { CoursesService } from './../services/Courses/courses.service';
import { FormerService } from './../services/former/former.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { ReviewsService } from '../services/reviews/reviews.service';


@Component({
  selector: 'app-affiche-profile',
  templateUrl: './affiche-profile.component.html',
  styleUrls: ['./affiche-profile.component.css']
})
export class AfficheProfileComponent implements OnInit {
infosU:any;
infosC:any;
picture:any;
idStudent!:any;
idFormer!:number;
message=0;
  user!:{formerEmail:string; courseName:string};
 
  constructor(public reviewService:ReviewsService ,private fb:FormBuilder,private route:ActivatedRoute,
    private formerService:FormerService,private courseService:CoursesService,public studentService:StudentService){}
    public Email=this.route.snapshot.params['formerEmail'];
    public CourseName=this.route.snapshot.params['courseName'];
    public courseId=this.route.snapshot.params['id']; 
    public id=this.route.snapshot.params['id'];
    reviewForm:any;
    reviews:any;
    courses:any;
    
    loggedUser=localStorage.getItem('loggedUser')!;


  ngOnInit(): void {
    this.user={
      formerEmail: this.route.snapshot.params['formerEmail'],
      courseName: this.route.snapshot.params['courseName'],

    }
    this.reviewService.getAcceptReviews(this.Email,this.id).subscribe((data:any)=>this.reviews=data);
    this.formerService.getUsersByEmail(this.Email).subscribe((data: any)=>this.infosU=data);
    this.courseService.findByFormerANDCourseName(this.CourseName,this.Email).subscribe((data: any)=>this.infosC=data);
    this.formerService.getPicture(this.Email).subscribe((data: any)=>this.picture=data);
    this.courseService.getCourseById(this.courseId).subscribe((data:any)=>this.courses=data);

    this.reviewForm=this.fb.group({
      email:[''],
      userName:[''],
      addReview:[''],
      courseId:['']
      
    });
  
   }
   AddR()
  {
  this.message=1;
    var fd=new FormData();

    fd.append("addReview",this.reviewForm.controls['addReview'].value);
    fd.append("email",this.reviewForm.controls['email'].value);
    fd.append("userName",this.reviewForm.controls['userName'].value);
    fd.append("courseId",this.reviewForm.controls['courseId'].value);

  

    this.reviewService.addReview(fd).subscribe((data: any)=>console.log(data));

  }
  
  
  }
 




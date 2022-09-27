import { StudentService } from './../services/student/student.service';
import { Component, OnInit ,ViewChild, OnDestroy, SimpleChanges } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource ,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/Courses/courses.service';
import { FormerAuthService } from '../services/former/former-auth.service';
import { FormerService } from '../services/former/former.service';
import { AnnoucementService } from '../services/announcement/annoucement.service';
import { ReviewsService } from '../services/reviews/reviews.service';

declare interface TableData {
  
  courses: string[][];
}
declare interface TableData1 {
  gouvernorat: string[];
  
  
}
declare interface TableData3 {
  slide: string[];
  courses: string[][];
}
@Component({
  selector: 'app-home-former',
  templateUrl: './home-former.component.html',
  styleUrls: ['./home-former.component.css']
})
export class HomeFormerComponent implements OnInit {
  opened=true;
showFiller = false;
  
showNavigationArrows = false;
showNavigationIndicators = false;
images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

selected = 0;
hovered = 0;
readonly = false;
public tableData1!: TableData;
public tableData2!: TableData1;


// @ts-ignore
message=0;
courseForm:any;
file!: File;
loggedEmail=localStorage.getItem('loggedEmail')!;
constructor(config: NgbCarouselConfig,public formerAuthService:FormerAuthService,public studentService: StudentService
  ,public formerService:FormerService,private fb:FormBuilder, private courseservice:CoursesService,private annnoucementService:AnnoucementService,private reviewsService:ReviewsService) {
  config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.courseForm=this.fb.group({
      price:[''],
      courseName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      formerEmail:[''],
      picture:[''],
      city:[''],
      phoneNumber:['']
    });
  

   }
   users:any;
   courseId:any;
   public getStudentByCourses(courseId:any){
     this.studentService.getUserByCourse(courseId).subscribe((data: any)=>this.users=data);
     
   }

   picture:any;
   annonces:any;
   reviews:any;
  public formerEmail=localStorage.getItem('loggedEmail')!;
  public formerPhoneNumber=localStorage.getItem('loggedTelephoneNumber')!;
  courses:any;
  count:any;
  ngOnInit(): void {
  let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.formerService.getPicture(loggedEmail).subscribe((data: any)=>this.picture=data);
    this.annnoucementService.getAllAnnouncements().subscribe((data: any)=>this.annonces=data);
    this.courseservice.getCourseByEmail(loggedEmail).subscribe((data: any)=>this.courses=data);
    this.reviewsService.countReviews(loggedEmail).subscribe((data:any)=>this.count=data);
    this.studentService.getUserByCourse(this.courseId).subscribe((data: any)=>this.users=data);

    this.reviewsService.getReviewsByEmail(loggedEmail).subscribe((data:any)=>this.reviews=data);
    //this.countReviews(loggedEmail);
   
      
  
  this.tableData2={ gouvernorat: [ 'Ariana', 'Bèja', 'BenArous', 'Bizerte', 'Gabès',
  'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kébili',
  'Le Kef', 'Mahdia', 'La Manouba', 'Médenine', 'Monastir',
  'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse',
  'Tataouine', 'Tozeur', 'Tunis', 'Zaghouane']};
  this.tableData1 = {
   
    courses: [
        ['Français', 'Arabe', 'Dance', 'Yoga','Piano', 'Maths'],
         ['Anglais','Developpent', 'Tennis', 'Allemand', 'Peinture'],
         ['SVT', 'Chimie', 'Phylosophie'],
        
    ]
};
}
region= [
  {'id':1,'name':'Sousse','image':'../../../assets/img/sousse.jpg'},
  {'id':2,'name':'Monastir','image':'../../../assets/img/monastir.jpg'},
  {'id':3,'name':'Sfax','image':'../../../assets/img/sfax.jpg'},
  ]
course= [
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/angular.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/typescript.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/reactjs.jpg','linkpage':'allprof'},
],
  [{'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
  {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
]
]
paused = false;
unpauseOnArrow = false;
pauseOnIndicator = false;
pauseOnHover = true;
pauseOnFocus = true;

@ViewChild('carousel', { static: true })
carousel!: NgbCarousel;

togglePaused() {
  if (this.paused) {
    this.carousel.cycle();
  } else {
    this.carousel.pause();
  }
  this.paused = !this.paused;
}

onSlide(slideEvent: NgbSlideEvent) {
  if (this.unpauseOnArrow && slideEvent.paused &&
    (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    this.togglePaused();
  }
  if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    this.togglePaused();
  }
}



  
toggleSidebar(){
  this.opened=!this.opened;
}
public isLoggedInF() {
  return this.formerAuthService.isLoggedInF();
}

 /***************courses*************** */

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
    fd.append("category",this.courseForm.controls['category'].value);
    fd.append("description",this.courseForm.controls['description'].value);
    fd.append("formerName",this.courseForm.controls['formerName'].value);
    fd.append("formerEmail",this.courseForm.controls['formerEmail'].value);
    fd.append("city",this.courseForm.controls['city'].value);
    fd.append("phoneNumber",this.courseForm.controls['phoneNumber'].value);
    fd.append("picture",this.file,this.file.name);

    this.courseservice.addCourse(fd).subscribe((data: any)=>console.log(data));

  }
  email:any;
  id:any;
  accept(email:any,id:number){
    this.reviewsService.acceptReviews(email,id).subscribe((data:any)=>console.log(data))
  }
  
  public onOpenModal( mode: string): void {
    
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    
    button.click();
  }
  public DeleteReview(reviewId: number){
    this.reviewsService.deleteReview(reviewId).subscribe(
      (data: any)=>
      this.reviews=data);
  
   
    
  }

  
}
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from '../services/Courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private fb:FormBuilder, private coursesservice:CoursesService) {}
  //category="Informatique";
  ngOnInit(): void {
   // this.coursesservice.getAllCourses().subscribe((data: any)=>this.courses=data);
    //this.coursesservice.getCourseByCategory(this.category).subscribe((data: any)=>this.courses=data);
  }
  courses:any;
  course= [
    {'id':1,'name':'Computer science','image':'../../../assets/img/informatique.jpg','linkpage':'informatique'},
    {'id':2,'name':'Maths','image':'../../../assets/img/math.jpg','linkpage':'mathematique'},
    {'id':3,'name':'Languages','image':'../../../assets/img/langue.jpg','linkpage':'language'},
    {'id':4,'name':'Physics','image':'../../../assets/img/physique1.jpg','linkpage':'physiques'},
    {'id':5,'name':'Dance','image':'../../../assets/img/dance3.jpg','linkpage':'dance'},
    {'id':6,'name':'Sports','image':'../../../assets/img/sport.jpg','linkpage':'sports'},
    {'id':7,'name':'Chemistry','image':'../../../assets/img/chimie.jpg','linkpage':'chemistry'},
    {'id':8,'name':'Music','image':'../../../assets/img/musique.jfif','linkpage':'music'},
  
  ]
  /*foodForm:any;
  // @ts-ignore
  file: File ;
  foods:any;
  constructor(private fb:FormBuilder, private fs:CoursesService) {
    this.foodForm=this.fb.group({
      price:[''],
      courseName:[''],
      category:[''],
      description:[''],
      formerName:[''],
      formerEmail:[''],
      picture:['']
    });

   }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngDoCheck(): void {

  }

 

  fnChange({event}: { event: any })
  {
    this.file=event.target.files[0];
    console.log(this.file.name);
    console.log(this.file.size);
  }

  fnAdd()
  {
    var fd=new FormData();
    // alert(this.foodForm.controls['expiryDate'].value);
    fd.append("price",this.foodForm.controls['price'].value);
    fd.append("courseName",this.foodForm.controls['courseName'].value);
    fd.append("category",this.foodForm.controls['category'].value);
    fd.append("description",this.foodForm.controls['description'].value);
    fd.append("formerName",this.foodForm.controls['formerName'].value);
    fd.append("formerEmail",this.foodForm.controls['formerEmail'].value);
    fd.append("picture",this.file,this.file.name);

    this.fs.addFood(fd).subscribe(data=>console.log(data));

  }

*/
  
}

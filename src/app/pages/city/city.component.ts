import { ActivatedRoute } from '@angular/router';
import { CoursesService } from './../services/Courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private coursesservice:CoursesService,private route:ActivatedRoute ) { }
  public City=this.route.snapshot.params['city'];
courses:any;
  ngOnInit(): void {

    this.coursesservice.getCourseByCity(this.City).subscribe((data: any)=>this.courses=data);
  }

}

import { CentercoursesService } from './../services/centerCourses/centercourses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(public centercoursesService:CentercoursesService) {}
    courses!:any;
  ngOnInit(): void {
    this.centercoursesService.getAllCenterCourses().subscribe((data: any)=>this.courses=data);
  }

}

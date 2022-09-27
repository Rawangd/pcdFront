import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users= [
    {'id':1,'roleName':'Admin','linkpage':'alladmintable'},
    {'id':2,'roleName':'Student','linkpage':'allstudenttable'},
    {'id':3,'roleName':'Former','linkpage':'allformertable'},
    {'id':4,'roleName':'Center','linkpage':'allcentertable'},
  
  ]

}

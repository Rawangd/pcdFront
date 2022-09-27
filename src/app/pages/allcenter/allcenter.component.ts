import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcenter',
  templateUrl: './allcenter.component.html',
  styleUrls: ['./allcenter.component.css']
})
export class AllcenterComponent implements OnInit {

  srcImage:string="..\assets\img\center33.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  center= [
    {'id':1,'name':"Centers name",'descriptionjob':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/c2.webp'},
    {'id':2,'name':'Centers name','descriptionjob':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/c2.webp'},
    {'id':3,'name':'Centers name','descriptionjob':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/c2.webp'},
    {'id':4,'name':'Centers name','descriptionjob':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/c2.webp'},
  ]

}

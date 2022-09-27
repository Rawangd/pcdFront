import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allprof',
  templateUrl: './allprof.component.html',
  styleUrls: ['./allprof.component.css']
})
export class AllprofComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'someone name','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img1.jpg','linkpage':'allprof'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img2.jpg','linkpage':'allprof'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img3.jpg','linkpage':'allprof'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img4.jpg','linkpage':'allprof'},
  ]

}

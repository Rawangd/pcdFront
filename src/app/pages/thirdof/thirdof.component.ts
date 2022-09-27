import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-thirdof',
  templateUrl: './thirdof.component.html',
  styleUrls: ['./thirdof.component.css']
})
export class ThirdofComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  
  third= [ 
    {'id':1,'name':'Learner','image':'../../../assets/img/student2.webp','linkpage':'registerstudent'},
    {'id':2,'name':'Former','image':'../../../assets/img/formateur2.webp','linkpage':'registerformer'},
    {'id':3,'name':'Training center','image':'../../../assets/img/centre.webp','linkpage':'registercenter'},]
   
}

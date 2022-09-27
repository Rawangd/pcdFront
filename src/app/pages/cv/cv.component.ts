import { FormerService } from './../services/former/former.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private formerService:FormerService) { }
user:any;
  ngOnInit(): void {
    let loggedEmail: string;
    loggedEmail=localStorage.getItem('loggedEmail')!;
    this.formerService.getUsersByEmail(loggedEmail).subscribe((data: any)=>this.user=data);
  }

}

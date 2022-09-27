import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}

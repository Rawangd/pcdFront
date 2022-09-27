import { AnnoucementService } from './../services/announcement/annoucement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  constructor(private annnoucementService :AnnoucementService) { }
annonces:any;
  ngOnInit(): void {
    this.annnoucementService.getAllAnnouncements().subscribe((data: any)=>this.annonces=data);
  }

}

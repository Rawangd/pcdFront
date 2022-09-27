import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormerService } from '../services/former/former.service';

@Component({
  selector: 'app-allformertable',
  templateUrl: './allformertable.component.html',
  styleUrls: ['./allformertable.component.css']
})
export class AllformertableComponent implements OnInit {
  constructor(private http:HttpClient,private formerService :FormerService) { }
  users:any;
  roleName="Former";
  ngOnInit(): void {
    this.formerService.getUsersByRole(this.roleName).subscribe((data: any)=>this.users=data);
  }
  public deleteusers!:any;
  public onDeleteFormer(courseId: String){
    this.formerService.deleteFormer(courseId).subscribe(
      (data: any)=>
      this.users=data);
  
   
    
  }
  public onOpenModal(courses:any,mode:string):void{
    const container=document.getElementById('main-container');
     const button=document.createElement('button');
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle','modal');
    
     if (mode ==='delete'){
       this.deleteusers=courses;
       button.setAttribute('data-target','#deletecourseModal');
     }
     container?.appendChild(button);
     button.click();
   }
}

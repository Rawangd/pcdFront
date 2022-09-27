import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CenterService } from '../services/center/center.service';

@Component({
  selector: 'app-allcentertable',
  templateUrl: './allcentertable.component.html',
  styleUrls: ['./allcentertable.component.css']
})
export class AllcentertableComponent implements OnInit {

  constructor(private http:HttpClient,private centerService :CenterService) { }
  users:any;
  roleName="Center";
  ngOnInit(): void {
    this.centerService.getUsersByRole(this.roleName).subscribe((data: any)=>this.users=data);
  }
  public deleteusers!:any;
  public onDeleteCenter(centerId: String){
    this.centerService.deleteCenter(centerId).subscribe(
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

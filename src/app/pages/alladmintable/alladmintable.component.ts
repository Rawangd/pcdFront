import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-alladmintable',
  templateUrl: './alladmintable.component.html',
  styleUrls: ['./alladmintable.component.css']
})
export class AlladmintableComponent implements OnInit {

  
  constructor(private http:HttpClient,private adminService :AdminService) { }
roleName="Admin";

users:any;
  ngOnInit(): void {
    this.adminService.getUsersByRole(this.roleName).subscribe((data: any)=>this.users=data);
  }
  public deleteusers!:any;
  public onDeleteAdmin(adminId: String){
    this.adminService.deleteAdmin(adminId).subscribe(
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

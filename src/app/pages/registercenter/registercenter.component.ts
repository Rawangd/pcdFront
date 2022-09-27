import { Router } from '@angular/router';
import { CenterService } from './../services/center/center.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Center } from '../model/center';
@Component({
  selector: 'app-registercenter',
  templateUrl: './registercenter.component.html',
  styleUrls: ['./registercenter.component.css']
})
export class RegistercenterComponent implements OnInit {

  center=new Center();
  private _terms:boolean =false;
  private _invalidLogin : boolean = false;
  private _errorMessage: any;
  constructor(private centerservice :CenterService, private router:Router) { }

  
  
  get invalidLogin(): boolean {
    return this._invalidLogin;
  }

  set invalidLogin(value: boolean) {
    this._invalidLogin = value;
  }

  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(value) {
    this._errorMessage = value;
  }
  get terms(): boolean {
    return this._terms;
  }

  set terms(value: boolean) {
    this._terms = value;
  }
  ngOnInit(): void {
  }
  checkForm(myForm:NgForm){
    const letters=/^[a-zA-Z]+$/;
    let centerName : string = (myForm.value.centerName);
    let DirectorName : string = (myForm.value.centerDirectorName);
    let username : string = (myForm.value.userName);

    let email : string = (myForm.value.userEmail);
    let password : string = myForm.value.userPassword;
    let confirmpassword   : string = myForm.value.userConfirmPassword;
    let address  : string = myForm.value.userAddress;
    let telephonenumber  : string = myForm.value.userTelephoneNumber;
    let country  : string = myForm.value.userCountry;
    let city  : string = myForm.value.userCity;
    let postalcode  : string = myForm.value.userPostalCode;
    let description : string = myForm.value.userDescription;




    let atposition=email.indexOf("@");
    let dotposition=email.lastIndexOf(".");
    if (centerName==null || centerName=="" || username==null || username=="") {
      this._errorMessage ="Center's name and Director's name can't be blank";
      this._invalidLogin =true;
    }
   else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
      this._errorMessage ="Please enter a valid e-mail address ";
      this._invalidLogin =true;
    }
    else if(password.length<3) {
      this._errorMessage ="Password must be at least 3 characters long.";
      this._invalidLogin =true;
    }
    else if (password!=confirmpassword) {
      this._errorMessage ="Password and confirmation password must be same!";
      this._invalidLogin =true;
      console.log(password);
      console.log(confirmpassword);
    }
    else if(address==null || address=="") {
      this.errorMessage ="Please enter your address";
      this.invalidLogin =true;
    }
    else if(telephonenumber==null || telephonenumber=="") {
      this.errorMessage ="Please enter your phone";
      this.invalidLogin =true;
    }
    else if(country==null || country=="") {
      this.errorMessage ="Please enter your country";
      this.invalidLogin =true;
    }
    else if(city==null || city=="") {
      this.errorMessage ="Please enter your city";
      this.invalidLogin =true;
    }
    else if(postalcode==null || postalcode=="") {
      this.errorMessage ="Please enter your postal code";
      this.invalidLogin =true;
    }
   
    else if(description==null || description=="") {
      this.errorMessage ="Please enter your description";
      this.invalidLogin =true;
    }
    else if (!this.terms){
      this._errorMessage ="Please read the Terms and Conditions";
      this._invalidLogin =true;
    }
    else {
      this._invalidLogin = false;
    }
  }



  registerNewCenter(myForm: NgForm){
    this.checkForm(myForm);
    if(!this.invalidLogin) {
    this.centerservice.registerC(this.center).subscribe(
      
      response=>{
        console.log(response)
        this.router.navigate(["/login"])
      },
     error=>{
        
        console.log(error);
        this._errorMessage ="Email or Username already in use";
        this._invalidLogin =true;
        
      }
        );
      
    }
  }
}


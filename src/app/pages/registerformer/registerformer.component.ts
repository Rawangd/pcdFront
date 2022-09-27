import { Former } from './../model/former';
import { FormerService } from './../services/former/former.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerformer',
  templateUrl: './registerformer.component.html',
  styleUrls: ['./registerformer.component.css']
})
export class RegisterformerComponent implements OnInit {

  constructor(private formerservice:FormerService,private router :Router) { }

  former=new Former();
  private _terms:boolean =false;
  private _invalidLogin : boolean = false;
  private _errorMessage: any;


  
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
  checkForm(myForm:NgForm){
    const letters=/^[a-zA-Z]+$/;
    let fullName : string = (myForm.value.userFullName);
    let userName : string = (myForm.value.userName);
    let gender : string = (myForm.value.userGender);

    let email : string = (myForm.value.userEmail);
    let password : string = myForm.value.userPassword;
    let confirmpassword   : string = myForm.value.userConfirmPassword;
    let address  : string = myForm.value.userAddress;
    let telephonenumber  : string = myForm.value.userTelephoneNumber;
    let country  : string = myForm.value.userCountry;
    let city  : string = myForm.value.userCity;
    let postalcode  : string = myForm.value.userPostalCode;
    let level  : string = myForm.value.userLevel;
    let domain  : string = myForm.value.userDomain;
    let experience  : string = myForm.value.userExperience;
    let description : string = myForm.value.userDescription;
    let skills : string = myForm.value.skills;
    let interests : string = myForm.value.interests;




    let atposition=email.indexOf("@");
    let dotposition=email.lastIndexOf(".");
    if (fullName==null || fullName=="" || userName==null || userName=="") {
      this._errorMessage ="Full Name and UserName can't be blank";
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
    else if(gender==null || gender=="") {
      this.errorMessage ="Please enter your gender";
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
    else if(level==null || level=="") {
      this.errorMessage ="Please enter your level";
      this.invalidLogin =true;
    }
    else if(experience==null || experience=="") {
      this.errorMessage ="Please enter your experience";
      this.invalidLogin =true;
    }
    else if(domain==null || domain=="") {
      this.errorMessage ="Please enter your job";
      this.invalidLogin =true;
    }
    else if(description==null || description=="") {
      this.errorMessage ="Please enter your description";
      this.invalidLogin =true;
    }
    else if (skills==null || skills==""){
      this._errorMessage ="Please enter your skills";
      this._invalidLogin =true;
    }
    else if (interests==null || interests==""){
      this._errorMessage ="Please enter your interests";
      this._invalidLogin =true;
    }
    else if (!this.terms){
      this._errorMessage ="Please read the Terms and Conditions";
      this._invalidLogin =true;
    }
    else {
      this._invalidLogin = false;
    }
  }





 
  
  ngOnInit(): void {
  }
  
  registerNewFormer(myForm:NgForm){

    this.checkForm(myForm);
    if(!this.invalidLogin) {
    this.formerservice.registerF(this.former).subscribe(
      
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

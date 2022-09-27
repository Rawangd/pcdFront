
import { Role } from "./role";

export class User {
    userName!:string;
    userFullName!:string;
    userEmail!:string;
     userPassword!: string;
    userAddress!: string;
     userBirthday!: string;
     userGender!: string;
     userTelephoneNumber!: number;
     userPostalCode!: number;
     userCity!: string; 
     userCountry!: string;

    roles!:Role[];
   
   /*
        constructor(userName:any,userFullName:any,userEmail:any,userPassword:any,userAddress:any,
            userBirthday:any,userGender:any ,userTelephoneNumber:any,userPostalCode:any,userCity:any,
            userCountry:any,roles:any){
                this.userName=userName;
                this.userFullName=userFullName;
                this.userEmail=userEmail;
                this.userPassword=userPassword;
                this.userAddress=userAddress;
                this.userBirthday=userBirthday;
                this.userGender=userGender;
                this.userTelephoneNumber=userTelephoneNumber;
                this.userPostalCode=userPostalCode;
                this.userCity=userCity;
                this.userCountry=userCountry;
                this.roles=roles;
            }
            */constructor(){}
}
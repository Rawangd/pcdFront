import { Byte } from "@angular/compiler/src/util";
import { Role } from "./role";

export class Student {
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
   
    constructor(){}
        
}

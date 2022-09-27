import { Role } from "./role";

export class Admin {
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

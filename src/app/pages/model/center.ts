import { Role } from "./role";

export class Center {
    userName!:string;
  
    centerName!: string;
    centerDirectorName!: string;
    userPassword!: string;
    userEmail!: string;
    userAddress!: string;
    userTelephoneNumber!: string;
    userPostalCode!: number;
    userCity!: string; 
    userCountry!: string;
    userDescription!:string;

    roles!:Role[];
    constructor(){}
}

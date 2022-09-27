import { Byte } from "@angular/compiler/src/util";

export interface Course{
    id: number;
    formerName: string;
    formerEmail: string;
    category: string;
    price: number;
    courseName: string;
    description:string;
    picture: Byte[];
}
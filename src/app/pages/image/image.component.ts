import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
//import pdfMake from "pdfmake/build/pdfmake";
//import pdfFonts from "pdfmake/build/vfs_fonts";
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  PATH_OF_API = 'http://localhost:9090';
  //image details
  selectedFile!: File;
public loggedEmail=localStorage.getItem('loggedEmail')!;
  Image= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHEBAQDw0OEhUNDw8SFg0QFQ8PEBARFxEXFhYRExMYHSggGBolGxUTITEhJSktLi4uGB8zODMyNygtLisBCgoKDQ0OFRAQFSsdHR0tKy0tLSsrKy0tKy0tLTI3KzctKzctLSstKy03LTcrKystLS0rKystKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADQQAQABAgIGCQIGAwEAAAAAAAABAgMEESExQVKh0QUTFDJRYXGBkRKxIkJigsHhM3Lwov/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcVXqaddVMeswDsRxfon89PzCSNIAAAAAAAAAAAAAAAAAAAAAAAAClicfFvRTpnx2RzQ4/F/VnRTOjbPj5QotkTaku36rveqn01R8IwWkd27tVru1THpq+HAYNHD9IZ6K4y/VGr3hfic3z61gsXNnRM/hn/z5psVOmuGsSoAAAAAAAAAAAAAAAAAAVOkL/VU5Rrq4RtlbYmMu9dXM7InKPSP+lsZahAWgAAAAABpdGX/AKo+idmqfLwX2DaudVVFUbJ4bW7E5osXK9AY0AAAAAAAAAAAAAAABxer+imqfCJngwW1jpyt1ejFVynoAUkAAAAAAbWBq+u3T5Rl8aGK1ei5/B6VSnpvK4AlYAAAAAAAAAAAAAAACDGxnbr9M/jSxW/XT9cTHjEwwJjLR4aFcp6AFJAAAAAAGt0ZGVv1meX8MluYWjq6KY8o5p6VylASoAAAAAAAAAAAAAAAAZHSNrq689len32tdDirHX0zG3ZPhLYysQe1U/RMxOuNGTxaAAAAAAE2EtddXEbI0z6Q21bA4fqKdOurX5eSyi1cgAxoAAAAAAAAAAAAAAAAACrjMJ1+mNFUcfKWTVTNE5TGUxsfQIr1im/H4o99sektlZYwxdu9HVR3ZifKdEoJwtcfknhP2VqcQiaMLXP5Kvsmt9HV1d6Yp4yaYpxGfu08Dg+r/FVr2R4f2nw+Fpsao0706ZTptbIAMUAAAAAAAAAAAAAAAAA8qqinTM5ecg9c3LkW4zmYhSv9IxGiiM/OdXwz7lybs51TMy2Rlq7f6Rz0UR+6f4gsdIzGiuM/1Rr+FAVidrbt4qi5qqj0nRPxKXN8+ROW2WeW+n0KK5iKLeuqPTPOfhhzOe2TUeT00b3SWyiP3TyR2OkJp7+nzjRKkNyM2t61epuxnTMT949Ydvn6KponOJmJ8YXrHSOWiuP3R/MJsbK0hzbuRcjOmYmPGHTFAAAAAAAAAAAABM5K+KxcYfRrmdnNl38TVe1zo3Y1NkZav4jpCmjRT+KfHZHNn3r1V7TVPtsj2RipE2gDWAAAAAAAAAAOrdybU50zMNDD9IROivR+qNX9M0ZjdfQU1RVpic/OHrCs3qrPdn22T7NLC42L2iYynw2T6JxUq2AxoAAAAAA8rq+mJnwjN6ixXcr/ANavsDFrrm5M1TrlyC45gDQAAAAAAAAAAAAAAInL22gDdw9zraaavGOO1IrdHf46ff7ysuboAAAAAAIsV3K/9avslc10/XExO2JgGAOrtubUzTOzj5w5dI5gAAAAAAAAAAAAAAAAPaYmqYiIzmdgNfo//HT7/eVlHh7fVUxT4RxSObpAAAAAAAAHF21Td0VREoew293jVzWQZit2G3u8Z5nYbe7xq5rI3aZFbsNvd4zzOw293jVzWQ2mRW7Db3eNXM7Db3eNXNZDaZFbsNvd41czsNvd41c1kNpkVuw293jVzOw293jVzWQ2mRW7Db3eNXM7Db3eNXNZDaZFbsNvd41czsNvd41c1kNpkVuw293jVzOw293jPNZDaZFbsNvd41c0tqxTZ7tMR57flIM1uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=';

  base64Data: any;

  student: any;

  message!: string;
  //session variables
  imageName: any;

  email!: string;
  firstName!: string;
  lastName!: string;
  address!: string;
  description!: string;
  earning: any;
  inscription_date!: string;
  job: any;
  rating: any;
  sexe: any;
  telephone_number: any;
  nationality: any;
  constructor(private httpClient: HttpClient) {
    this.getImage();
  }

  ngOnInit(): void {
    this.getImage();
   
  }

  onChange(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.onUpload();
  }

  onUpload() {
    console.log("upload");
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.put('http://localhost:9090/saveImageByEmail/'+this.loggedEmail, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
          this.getImage();
        }
      );
  }
  //Gets called when the user clicks on retieve image button to get the image from back end

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:9090/getImageByEmail/'+this.loggedEmail)

      .subscribe(

        res => {

          this.student = res;
          if(this.student.image!=null){
            this.base64Data = this.student.image;
            this.Image = 'data:image/jpeg;base64,' + this.base64Data;
          }

        //  this.id=this.freelancer.id;
          this.email=this.student.email;
          this.firstName=this.student.firstName;
          this.lastName=this.student.lastName;
          this.address=this.student.address;
          this.description=this.student.description;
          this.earning=this.student.earning;
          this.inscription_date=this.student.inscriptionDate;
          this.job=this.student.job;
          this.rating=this.student.rating;
          this.sexe=this.student.rating;
          this.telephone_number=this.student.telephoneNumber;
          this.nationality=this.student.nationality;

          sessionStorage.setItem("username",this.email);
         // sessionStorage.setItem("id",this.user);
          sessionStorage.setItem("firstName",this.firstName);
          sessionStorage.setItem("lastName",this.lastName);
          sessionStorage.setItem('address',this.address);
          sessionStorage.setItem('description',this.description);
          sessionStorage.setItem('earning',this.earning);
          sessionStorage.setItem('inscription_date', this.inscription_date);
          sessionStorage.setItem('job',this.job);
          sessionStorage.setItem('rating',this.rating);
          sessionStorage.setItem('sexe',this.sexe);
          sessionStorage.setItem('telephone_number', this.telephone_number);
          sessionStorage.setItem('nationality',this.nationality);
        }
      );

  }

  //pdf content
  public docDefinition = {
    /*header: 'Resume',*/
    content: [
      {
        text: 'Resume',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: sessionStorage.getItem("firstName")+" "+ sessionStorage.getItem("lastName"),
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        columns: [
          [
            {
              text: sessionStorage.getItem("firstName")+" "+ sessionStorage.getItem("lastName"),
              bold: true
            },
            { text: sessionStorage.getItem("address")},
            { text: sessionStorage.getItem("username") },
            { text: sessionStorage.getItem("telephone_number") }
          ],
          [
            {
              text: `Date: ${new Date().toLocaleString()}`,
              alignment: 'right'
            },
            {
              text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
              alignment: 'right'
            }
          ]
        ]
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        ul: [
          sessionStorage.getItem("description"),

        ],
      },
      {
        text: 'Skills Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['Language', 'skills', 'education', 'date'],
            ['French', 'Java', 'ensi', '19/05/2020'],
            ['english', 'c++', 'ensi', '29/05/2020'],
            ['arabic', 'linux', 'ensi', '29/05/2021'],

          ]
        }
      },
      {
        columns: [
          [{ qr: "salem", fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },

    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15, 0, 15]
      }
    }
  };
  //create and open pdf in new window
/*  onOpen() {

    pdfMake.createPdf(this.docDefinition).open();

  }
  //create and print pdf
  onPrint() {

    pdfMake.createPdf(this.docDefinition).print();
  }
  //create and download pdf
  onDownload() {

    pdfMake.createPdf(this.docDefinition).download();
  }*/
}
  
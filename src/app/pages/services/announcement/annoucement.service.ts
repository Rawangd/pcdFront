import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementService {

  constructor(private http:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  PATH_OF_API = 'http://localhost:9090';
  addAnnouncement(annonce:any) //this is not object of food. this is object of form data
  {
    return this.http.post(`${this.PATH_OF_API}/addAnnouncement`,annonce, {
      headers: this.requestHeader,
    });
  }
  getAllAnnouncements()
  {
    return this.http.get(`${this.PATH_OF_API}/announcements`, {
      headers: this.requestHeader,
    });
  }
}

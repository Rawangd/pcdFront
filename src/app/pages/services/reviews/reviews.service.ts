import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, enableProdMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  PATH_OF_API = 'http://localhost:9090';

  
  addReview(review:any) //this is not object of food. this is object of form data
  {
    return this.http.post(`${this.PATH_OF_API}/addReviews`,review, {
      headers: this.requestHeader,
    });
  }
  getReviewsByEmail(email:any){
    return this.http.get(`${this.PATH_OF_API}/reviewsByEmail/${email}`, {
      headers: this.requestHeader,
    });

  }

  acceptReviews(email:any,id:number){
    return this.http.put(`${this.PATH_OF_API}/acceptReview/${email}/${id}`, {
      headers: this.requestHeader,
    });

  }
  getAcceptReviews(email:any,id:number){
    return this.http.get(`${this.PATH_OF_API}/getAcceptReview/${email}/${id}`, {
      headers: this.requestHeader,
    });

  }
  public deleteReview(reviewId:number) :Observable<void> {
    return this.http.delete<void>(`${this.PATH_OF_API}/delete-review/${reviewId}`,{
      headers: this.requestHeader,
    });

  }
  countReviews(email:any){
    return this.http.get(`${this.PATH_OF_API}/reviews/count/${email}`, {
      headers: this.requestHeader,
    });

  }
}

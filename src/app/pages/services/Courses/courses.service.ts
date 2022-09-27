import { Course } from './../../model/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url:string='http://localhost:9090/courses';
  constructor(private http:HttpClient) { }
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  PATH_OF_API = 'http://localhost:9090';

  getCourseById(id:number){
    return this.http.get(`${this.PATH_OF_API}/getCourseById/${id}`, {
      headers: this.requestHeader,
    });
  }
  getAllCourses()
  {
    return this.http.get(`${this.PATH_OF_API}/courses`, {
      headers: this.requestHeader,
    });
  }
  getCountCourses()
  {
    return this.http.get(`${this.PATH_OF_API}/courses/count`, {
      headers: this.requestHeader,
    });
  }
  getAllFavorites()
  {
    return this.http.get(`${this.PATH_OF_API}/allFavorite`, {
      headers: this.requestHeader,
    });
  }
  getFirst5ByIsFavorite(isFavorite:Boolean)
  {
    return this.http.get(`${this.PATH_OF_API}/first5Favorite/${isFavorite}`, {
      headers: this.requestHeader,
    });
  }
  getCourseByEmail(formerEmail: String){
    return this.http.get(`${this.PATH_OF_API}/email/${formerEmail}`,{
      headers: this.requestHeader,
    });
  }
  findByFormerANDCourseName(CourseName: String, formerEmail:String){
    return this.http.get(`${this.PATH_OF_API}/CourseName/${CourseName}/${formerEmail}`,{
      headers: this.requestHeader,
    });
  }
  putFavorite(id: number){
 
    return this.http.put(`${this.PATH_OF_API}/Favorite/${id}`,{
      headers: this.requestHeader,
    });
  }
  insert(id: number,user:string,isFavorite:Boolean){
 
    return this.http.post(`${this.PATH_OF_API}/insert/${id}/${user}/${isFavorite}`,{
      headers: this.requestHeader,
    });
  }
  putFavoritee(id: number,user:string){
 
    return this.http.put(`${this.PATH_OF_API}/Favorite/${id}/${user}`,{
      headers: this.requestHeader,
    });
  }
  getCourseByCity(city: String){
    return this.http.get(`${this.PATH_OF_API}/city/${city}`,{
      headers: this.requestHeader,
    });
  }
  getCourseByCategory(categoryName:String){
    return this.http.get(`${this.PATH_OF_API}/category/${categoryName}`,{
      headers: this.requestHeader,
    });

  }
  updateCourses(courses:Course): Observable<Course> {
    return this.http.put<Course>(`${this.PATH_OF_API}/update-course`,courses,{
      headers: this.requestHeader,
    });
    
  }
  public deleteCourses(courseId:number) :Observable<void> {
    return this.http.delete<void>(`${this.PATH_OF_API}/delete-course/${courseId}`,{
      headers: this.requestHeader,
    });

  }


  addCourse(course:any) //this is not object of food. this is object of form data
  {
    return this.http.post(`${this.PATH_OF_API}/addCourses`,course, {
      headers: this.requestHeader,
    });
  }







  findCourseById(id:any)
  {
    return this.http.get(this.url+"/"+id,{
      headers: this.requestHeader,
    });
  }
  
  modifyCourse(course:any)
  {
    return this.http.put(`${this.PATH_OF_API}/updateCourses`,course,{
      headers: this.requestHeader,
    });
  }
  removeCourse(id:any)
  {
    return this.http.delete(this.url+"/"+id,{
      headers: this.requestHeader,
    });
  }
}

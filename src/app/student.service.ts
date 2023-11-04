import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Student } from './Student';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl:string = "http://localhost:8080/"

  constructor(private httpClient:HttpClient) {
  }

  //redirect to home page
  returnToHome(){
    window.location.href = "http://localhost:4200/students"
  }

  getStudentById(studentId:number):  Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/findStudent/${studentId}`)

  }
  
  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}/students`);
  }

  saveStudent(student: Student): Observable<Object> {
    return this.httpClient.post<Student>(`${this.baseUrl}/addStudent`, student).pipe(
      tap(() => {
        window.location.href = '/'; 
      })
    );
  }

  deleteStudent(studentId:number):Observable<Object>{
    const deleteUser = this.httpClient.delete(`${this.baseUrl}delete/${studentId}`);
    this.returnToHome();
    return deleteUser;
  }

  updateStudent2(studentId: number, student: Student): Observable<Object> {
    this.httpClient.put(`${this.baseUrl}/modify/${studentId}`, student).toPromise()
      .then(function(response) {
        if (response && (response as any).ok) {
          console.log("Request was successful: " + (response as any).status);
        } else {
          console.error("Request failed with status: " + ((response && (response as any).status) ? (response as any).status : 'unknown'));
        }
      })
      .catch(function(error) {
        console.error("Request failed: " + error);
      });
      return this.httpClient.put(`${this.baseUrl}/${studentId}`, student)
  }


  updateStudent(studentId: number, student: Student): Observable<Object> {
    this.httpClient.put(`${this.baseUrl}/modify/${studentId}`, student).toPromise()
      .then((response) => {
        if (response && (response as any).ok) {
          console.error("success");
        } 
      })
      .catch(function(error) {
        console.error("Request failed: " + error);
      });
      //this.returnToHome();
      //window.location.href = '/'; 
      return this.httpClient.put(`${this.baseUrl}/${studentId}`, student)
  }


}

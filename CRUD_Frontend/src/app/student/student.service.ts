// student.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'http://localhost:8000/crudapp/student';  // Base URL to web API


  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.studentsUrl}/showstudent`)

  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.studentsUrl}/getbyid?id=${id}`)
  }


  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.studentsUrl}/add`, student)
  }


  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.studentsUrl}/update/${id}`, student)
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(`${this.studentsUrl}/delete/${id}`);
  }


}

import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.getStudents();
  }
  ngOnInit(): void {
      this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudents().subscribe(students => {this.students = students, console.log(students)});
  }
}

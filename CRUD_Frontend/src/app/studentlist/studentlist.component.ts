import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router:Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe((data) => {
      console.log(data);
      this.getStudents();
    });
  }

  editStudent(id: number) {
    this.router.navigate([`/editstudent`,id]);
  }
}

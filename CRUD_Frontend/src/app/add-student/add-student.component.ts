import { Component } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: Student = new Student();

  studentCreate = false;
  constructor(private studentService: StudentService, private router: Router) {}
  onSubmit() {
    this.saveStudent();
  }
  saveStudent() {
    this.studentService.addStudent(this.student).subscribe((data) => {
      console.log(data);
      this.studentCreate = true;
      setTimeout(() => {
        this.goToStudentList();
      }, 1000);
    });
  }

  goToStudentList() {
    this.router.navigate(['/getstudent']);
  }
}

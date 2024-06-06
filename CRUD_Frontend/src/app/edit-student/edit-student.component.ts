import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{
  student: Student = new Student();
  id: number=0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe((data)=>{
        this.student=data;
    })
  }
  
  onSubmit() {
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
    console.log(data);
      this.router.navigate(['/getstudent']);
    });
  }

  
}


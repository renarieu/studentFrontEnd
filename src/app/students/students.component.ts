import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { UpdateStudentComponent } from '../update-student/update-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})



export class StudentsComponent implements OnInit {

  students:Student[];

  constructor(private studentService : StudentService, private router:Router) { }

  ngOnInit(){
    this.studentService.getStudents().subscribe(data=>{
      this.students = data;
    })
  }

  deleteStudent(studentId:number){
    console.log(studentId);
    
    this.studentService.deleteStudent(studentId).subscribe(data=>{
      console.log(data);
    }
    )
  }

  getStudent(studentId:number){
    this.router.navigate(['student-detail', studentId])
  }

  updateStudent(studentId:number){
    this.router.navigate(['update-student', studentId])
  }


}

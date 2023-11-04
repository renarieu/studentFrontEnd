import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentId:number;
  student:Student;
  constructor(private route: ActivatedRoute, private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    this.student = new Student();
    this.studentService.getStudentById(this.studentId).subscribe(data=>{
      this.student=data;
    })
  }

  onSubmit(){
    //After calling this method, the page will be redirected to the home page
    this.studentService.updateStudent2(this.studentId, this.student).subscribe(() => {
      //this.studentService.returnToHome();
    });
    this.studentService.returnToHome();
  }
}

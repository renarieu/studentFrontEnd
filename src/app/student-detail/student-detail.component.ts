import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {


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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: string[] = [
    'Anne',
    'Brian',
    'Charlie',
    'Daniel',
    'Erick',
    'Fred',
    'Greg',
    'Helen',
    'Ian',
    'Jane',
    'Katherine',
    'Laura',
  ];

  constructor() { }

  ngOnInit() {
  }

  checkName(name: string) {
    return name === 'Daniel' ? 'bold' : 'normal';
  }

  greet(name: string) {
    alert(`How'dy ${name}`);
  }

}

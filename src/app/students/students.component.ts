import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Input() currentUser: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

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
    return this.isCurrentUser(name) ? 'bold' : 'normal';
  }

  emitClicked(name: string) {
    this.clicked.emit(`How'dy ${name}`);
  }

  isCurrentUser(name: string) {
    return name === this.currentUser;
  }

}

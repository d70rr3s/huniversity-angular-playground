import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  currentUser: string;
  students: string[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = [
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
    this.currentUser = this.route.snapshot.params.name;
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

  goHome() {
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = '';
  }

  goToStudents() {
    this.router.navigate(this.currentUser ? [`students/${this.currentUser}`] : ['students']);
  }

}

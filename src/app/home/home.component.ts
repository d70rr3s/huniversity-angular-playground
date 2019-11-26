import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.list().subscribe( results => {
      console.log(results);
      this.users = results;
    });
  }

}

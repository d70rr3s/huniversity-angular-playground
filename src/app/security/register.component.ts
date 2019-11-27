import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../models/user.model';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  roles: any = ['Admin', 'User'];
  busy: boolean;
  form: FormGroup;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.busy = false;
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl(null, [
        Validators.minLength(3)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    });
  }

  doRegister() {
    const {name, surname, email} = this.form.value;
    const user: User = new User(name, surname, email);
    this.busy = true;
    this.usersService.create(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['']).then(() => {
        console.log('goto:home');
      });
    }, error => {
      console.error(error);
    }, () => {
      this.busy = false;
    });
  }

}

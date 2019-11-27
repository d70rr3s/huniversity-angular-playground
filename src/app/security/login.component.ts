import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      identifier: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  doLogin() {
    this.loginService.login(this.form.value.identifier, this.form.value.password).subscribe((data: any) => {
      localStorage.setItem('tokenAuth', data.token);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private readonly env = environment;
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
      localStorage.setItem(this.env.tokenKey, data.token);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  submitted: boolean;
  loginModel: { name: string, email: string } = { name: null, email: null };

  constructor() { }

  ngOnInit() {
    this.submitted = false;
  }

  doLogin(form: Form) {
    this.submitted = true;
  }

  resetLogin(form: NgForm) {
    this.submitted = false;
    form.reset();
  }

}

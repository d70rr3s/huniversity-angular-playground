import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  submitted: boolean;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.submitted = false;
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null)
    });
  }

  doRegister() {
    this.submitted = true;
    console.log(this.form);
  }

}

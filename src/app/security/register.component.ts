import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

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
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    });
  }

  doRegister() {
    this.submitted = true;
    console.log(this.form);
  }

  resetRegister() {
    this.submitted = false;
    this.form.reset();
  }

}

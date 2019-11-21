import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  dummy: string;
  submitted: boolean;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.dummy = null;
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
    // React to form value changes.
    this.form.valueChanges.subscribe(values => {
      const {name, email} = values;
      console.log(`Submitted values ${name}, ${email}`);
    });
    // React to form status changes.
    this.form.statusChanges.subscribe(validity => {
      console.log(`The form is ${validity}`);
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

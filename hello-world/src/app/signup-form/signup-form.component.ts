import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  });

  get username(): AbstractControl {
    return this.form.get('username');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }
}

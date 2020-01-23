import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  get username(): AbstractControl {
    return this.form.get('account.username');
  }

  get password(): AbstractControl {
    return this.form.get('account.password');
  }

  login() {
    console.log(this.form);
    this.form.setErrors({
      invalidLogin: true
    })
  }
}

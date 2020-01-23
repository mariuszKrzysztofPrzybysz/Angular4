import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { OldPasswordValidators } from './oldPassword.validators';
import { ConfirmPasswordValidators } from './confirmPassword.validators';
@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, OldPasswordValidators.incorrectPassword],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidators.dontMatch
    });
  }

  ngOnInit() {
  }

  form: FormGroup;

  get oldPassword(): FormControl {
    return this.form.get('oldPassword') as FormControl;
  }

  get newPassword(): FormControl {
    return this.form.get('newPassword') as FormControl;
  }

  get confirmNewPassword(): FormControl {
    return this.form.get('confirmNewPassword') as FormControl;
  }

  onSubmit(): void {
    console.log(this.form);
  }
}

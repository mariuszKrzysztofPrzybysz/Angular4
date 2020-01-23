import { ValidationErrors, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidators {
  static dontMatch(control: AbstractControl): ValidationErrors | null {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmNewPassword');

    if (newPassword.value !== confirmPassword.value) {
      return { dontMatch: true };
    }

    return null;
  }
}

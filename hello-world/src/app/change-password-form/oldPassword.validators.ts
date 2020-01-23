import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OldPasswordValidators {
  static incorrectPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({ incorrectPassword: true });
        }
        else {
          resolve(null);
        }

      }, 1500);
    });
  }
}

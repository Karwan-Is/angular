import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  getEmailErrorMessage(loginFormGroup) {
    if (loginFormGroup.get('emailVal').hasError('required')) {
      return 'You must enter an email';
    } else if (loginFormGroup.get('emailVal').hasError('email')) {
      return 'Not a valid email';
    }
  }

  getPasswordErrorMessage(loginFormGroup) {
    if (loginFormGroup.get('emailVal').valid) {
      if (loginFormGroup.get('passwordVal').hasError('required')) {
        return 'You must enter a password';
      }
      if (loginFormGroup.get('passwordVal').hasError) {
        return 'Password must be longer than 8 chars!';
      }
    }
  }
}

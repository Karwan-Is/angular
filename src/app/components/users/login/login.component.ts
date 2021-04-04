import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorsService } from 'src/app/services/errors.service';
import { Login } from '../../../models/Users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  user: Login

  constructor(private errorsService: ErrorsService, private fb: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Login) { }

  loginFormGroup = this.fb.group({
    emailVal: ['', [Validators.required, Validators.email]],
    passwordVal: ['', [Validators.required, Validators.minLength(8)]]
  })

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    return this.errorsService.getEmailErrorMessage(this.loginFormGroup)
  }

  getPasswordErrorMessage() {
    return this.errorsService.getPasswordErrorMessage(this.loginFormGroup)
  }

  handleLogin(): void {
    this.user = {
      email: this.loginFormGroup.get('emailVal').value,
      password: this.loginFormGroup.get('passwordVal').value
    }
    this.dialogRef.close(this.user);
  }
}

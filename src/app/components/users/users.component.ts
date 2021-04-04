import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ErrorsService } from '../../services/errors.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  hide = true
  email: string
  password: string
  loginFormGroup: FormGroup

  constructor(private fb: FormBuilder, public dialog: MatDialog, private errorsService: ErrorsService) { }

  handleLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      // width: '350px',
      // height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      emailVal: ['', [Validators.required, Validators.email]],
      passwordVal: ['', [Validators.required, Validators.minLength(8)]],
      firstNameVal: '',
      lastNameVal: ''
    })
  }

  getEmailErrorMessage() {
    return this.errorsService.getEmailErrorMessage(this.loginFormGroup)
  }

  getPasswordErrorMessage() {
    return this.errorsService.getPasswordErrorMessage(this.loginFormGroup)
  }

  handleRegister() {

  }
}

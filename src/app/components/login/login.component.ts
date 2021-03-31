import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.fb.group({
    emailValue: ['', [Validators.email, Validators.minLength(6), Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  handleClick() {
  }
}

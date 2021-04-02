import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service'
import { Login } from '../../models/Users'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  users: Login


  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  loginFormGroup = this.fb.group({
    emailValue: ['', [Validators.email, Validators.minLength(6), Validators.required]],
    passwordValue: ['', [Validators.minLength(8), Validators.required]]
  })

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: Login) => {
      this.users = data
    })
  }

  handleClick() {
    console.log("Email: " + this.loginFormGroup.get("emailValue").value)
    console.log("Password: " + this.loginFormGroup.get("passwordValue").value)
  }
}

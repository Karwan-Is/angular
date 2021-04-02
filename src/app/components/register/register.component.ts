import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { UsersService } from '../../services/users.service'
import { Register } from '../../models/Users'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  users: Register

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  registerFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.minLength(6), Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]]
  })

  ngOnInit(): void {

  }

  handleClick() {
    this.usersService.addUser(this.registerFormGroup.value).subscribe((data: Register) => {
      console.log("User Registered!")
    })

    console.log(this.registerFormGroup.value)
  }
}

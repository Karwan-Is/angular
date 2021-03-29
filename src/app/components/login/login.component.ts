import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {

  log(x){
    console.log(x)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

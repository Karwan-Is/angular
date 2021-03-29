import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  username = "";

  showUser(){
    console.log(this.username);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

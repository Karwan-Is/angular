import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  skills:any

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.listSkills().subscribe( data =>{
      this.skills = data
    })
  }
}

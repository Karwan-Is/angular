import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Skills } from '../../models/Skills'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  skills: Skills

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    // this.skillsService.listSkills().subscribe( data =>{
    //   this.skills = data
    // })

    this.skillsService.getSkills().subscribe((data: Skills) => {
      this.skills = data
    })
  }
}

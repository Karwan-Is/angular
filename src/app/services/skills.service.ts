import { Injectable } from '@angular/core';
import { Skills } from '../models/Skills'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skills[]

  constructor(private httpClient: HttpClient) { }

  // listSkills() {
  //   return this.httpClient.get('http://localhost:4008/skills')
  // }

  getSkills() {
    return this.httpClient.get('assets/skills.json')
  }
}

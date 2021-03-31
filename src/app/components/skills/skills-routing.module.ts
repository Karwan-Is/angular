import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillDetailesComponent } from './skill-detailes/skill-detailes.component';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,

  },
  {
    path: 'details',
    component: SkillDetailesComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }

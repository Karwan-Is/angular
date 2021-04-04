import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWorksComponent } from './my-works.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MyWorksComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWorksRoutingModule { }

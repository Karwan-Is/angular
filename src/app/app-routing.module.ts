import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: "", component:  HomeComponent},
  { path: "user", component:  UsersComponent},
  { path: "about", component:  AboutComponent},
  { path: "contact", component:  ContactComponent},
  { path: 'my-works', loadChildren: () => import('./components/my-works/my-works.module').then(m => m.MyWorksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

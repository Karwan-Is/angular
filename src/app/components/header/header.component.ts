import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = [
    { route: '', title: 'Home' },
    { route: 'my-works', title: 'My Works' },
    { route: 'about', title: 'About' },
    { route: 'contact', title: 'Contact' }
  ]

  activeLink = this.links[0];

  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}

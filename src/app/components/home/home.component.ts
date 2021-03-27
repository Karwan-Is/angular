import { Component, OnInit } from '@angular/core';
import { Skills } from '../../models/Skills'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  skills: Skills[]

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      {
        id: 1,
        title: "HTML",
        img: "assets/images/html.jpg",
        className: "html"
      },
      {
        id: 2,
        title: "CSS",
        img: "assets/images/css.jpg",
        className: "css"
      },
      {
        id: 3,
        title: "JavaScript",
        img: "assets/images/js.jpg",
        className: "js"
      },
      {
        id: 4,
        title: "React",
        img: "assets/images/react.jpg",
        className: "react"
      },
      {
        id: 5,
        title: "Node",
        img: "assets/images/node.jpg",
        className: "node"
      },
      {
        id: 6,
        title: "MongoDB",
        img: "assets/images/mongodb.jpg",
        className: "mongodb"
      },
      {
        id: 7,
        title: "Vue",
        img: "assets/images/vue.jpg",
        className: "vue"
      },
      {
        id: 8,
        title: "Anguler",
        img: "assets/images/anguler.jpg",
        className: "anguler"
      }
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';
import { Works } from '../../models/Works'

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {

  works: Works[]
  detailsLink = "details/"

  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    this.worksService.getWorks().subscribe((data: Works[]) => {
      this.works = data
    })
  }
}

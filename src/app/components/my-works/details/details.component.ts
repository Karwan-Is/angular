import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../../../services/works.service';
import { Works } from '../../../models/Works'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: any
  works: Works

  constructor(private activatedRoute: ActivatedRoute, private worksService: WorksService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.worksService.getWorks().subscribe((data: Works) => {
      this.works = data
    })
  }

}

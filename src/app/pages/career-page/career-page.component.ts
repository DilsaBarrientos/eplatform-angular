import { Component, OnInit } from '@angular/core';
import { CareerPageService } from './career-page.service';
import { CareerInfo } from './model/career-info-model';
import { RoadmapList } from './model/roadmap-list-model';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css']
})
export class CareerPageComponent implements OnInit {


  roadmaps: RoadmapList[];

  careerInfo: CareerInfo;

  constructor(private readonly careerPageService: CareerPageService) { }

  ngOnInit(): void {

    this.roadmaps = this.careerPageService.getRoadmaps();
    this.careerInfo = this.careerPageService.getCareerById(2);
  }

}

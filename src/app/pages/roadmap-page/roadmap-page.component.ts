import { Component, OnInit } from '@angular/core';
import { CourseList } from './model/course-list-mode';
import { RoadmapInfo } from './model/roadmap-info-model';
import { RoadmapPageService } from './roadmap-page.service';

@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.css']
})
export class RoadmapPageComponent implements OnInit {

  roadmapInfo: RoadmapInfo;

  courses: CourseList[];

  constructor(private readonly roadmapPageService: RoadmapPageService) { }

  ngOnInit(): void {
    this.roadmapInfo = this.roadmapPageService.getRoadmapById(1);
    this.courses = this.roadmapPageService.getCourses();
  }

}

import { Component, OnInit } from '@angular/core';
import { RoadmapAdminService } from './roadmap-admin.service';
import { roadmapCreate } from './model/roadmapCreate';


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  roadmap:roadmapCreate;

  id: Number;
	name: String;
	description: String;
	detail: String;
	iconId: String;
	bannerId: String;
	active: Boolean;
	//localDateTime: CreateDate;
	//localDateTime: UpdateDate;

  constructor (private readonly RoadmapAdminService: RoadmapAdminService){}

  ngOnInit(): void {
  }
 newroadmaps(): void{
   this.roadmap = {
      id: this.id,
     "name": this.name,
     "description": this.description,
     "detail": this.detail,
     "iconId": this.iconId,
     "bannerId": this.bannerId,
     "active": this.active
     //"localDateTime": this:localDateTime,
     //"localDateTime": this:localDateTime,
   }
   this.RoadmapAdminService.addRoadmap(this.roadmap);
 }
}

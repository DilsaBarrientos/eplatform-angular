import { Injectable } from '@angular/core';
import { roadmapCreate } from './model/roadmapCreate';

@Injectable({
  providedIn: 'root'
})
export class RoadmapAdminService {

roadmaps: roadmapCreate []=[];

  constructor() {
   }
   addRoadmap(roadmap:roadmapCreate): void{
     console.log(roadmap);
     this.roadmaps.push(roadmap);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoadmapSaveResponse } from 'src/app/pages/roadmap-page/model/roadmap-save-response-model';
import { RoadmapSaveRequest } from './model/roadmap-save-request';

@Injectable({
  providedIn: 'root'
})
export class RoadmapAdminService {


  constructor(private readonly http: HttpClient) { }

  create(roadmapToCreate: RoadmapSaveRequest){
    this.http.post('http://localhost:8080/api/v1/roadmaps', roadmapToCreate).subscribe(
      data => console.log(data),
      error => console.log("Error: " + error)
    );

  }

  findRoadmapByUrl(roadmapUrl: string): Observable<RoadmapSaveResponse> {
    console.log(roadmapUrl);
    return this.http.get<RoadmapSaveResponse>(`http://localhost:8080${roadmapUrl}`);
  }
}

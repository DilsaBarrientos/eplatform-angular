import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoadmapSaveResponse } from './model/roadmap-save-response-model';

@Injectable({
  providedIn: 'root'
})
export class RoadmapPageService {


  constructor(private readonly http: HttpClient) { }

  getRoadmapById(id: String): Observable<RoadmapSaveResponse>{

    return this.http.get<RoadmapSaveResponse>(`http://localhost:8080/api/v1/roadmaps/${id}`);
  }
}
